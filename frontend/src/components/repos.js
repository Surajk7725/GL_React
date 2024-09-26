import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RepoIcon, StarIcon, RepoForkedIcon, TriangleDownIcon } from '@primer/octicons-react';
import FlipMove from 'react-flip-move';
import ReposStyles from './styles/ReposStyles';
import DropdownStyles from './styles/DropdownStyles';
import  Section  from './styles/Section';
import langColors from './styles/langColors';

const Repos = ({ repoData }) => {
  const [topRepos, setTopRepos] = useState([]); // State for storing top repositories
  const [sortType, setSortType] = useState('stars'); // State for sorting type (stars, forks, size)
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  // Function to get top repositories based on sort type
  const getTopRepos = (type) => {
    const LIMIT = 8;                // Limit of repositories to display
    const map = {
      stars: 'stargazers_count',
      forks: 'forks_count',
      size: 'size',
    };
    const sortProperty = map[type];                            // Property to sort by
    const sorted = repoData
      .filter((repo) => !repo.fork)                           // Filtering out forked repositories
      .sort((a, b) => b[sortProperty] - a[sortProperty])     // Sorting repositories
      .slice(0, LIMIT);                                     // Limiting number of repositories

    setTopRepos(sorted);  // Setting the top repositories in state
  };

  // useEffect to get top repositories when repoData changes
  useEffect(() => {
    if (repoData.length) {
      getTopRepos();  // Get top repositories initially
    }
  }, []);

  // useEffect to get top repositories when sortType changes
  useEffect(() => getTopRepos(sortType), [sortType]);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Function to change repository sorting type
  const changeRepoSort = (sortType) => {
    setSortType(sortType);      // Set the sort type
    toggleDropdown();          // Toggle dropdown visibility
  };

  const sortTypes = ['stars', 'forks', 'size'];

  return (
    <Section>
      <ReposStyles>
        <header>
          <h2>Top Repos</h2>
          <div className="dropdown-wrapper">
            <span className="label">by</span>
            <DropdownStyles active={dropdownOpen}>
              <button className="dropdown__button" onClick={() => toggleDropdown()}>
                <label>{sortType}</label> 
                <TriangleDownIcon />
              </button>
              <ul className="dropdown__list">
                {sortTypes.map((type, i) => (
                  <li className="dropdown__list-item" key={i}>
                    <button onClick={() => changeRepoSort(type)}>{type}</button> 
                  </li>
                ))}
              </ul>
            </DropdownStyles>
          </div>
        </header>

        <div className="repo-list">
          {topRepos.length > 0 ? ( 
            <FlipMove typeName="ul">  
              {topRepos.map(repo => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo">
                    <div className="repo__top">
                      <div className="repo__name">
                        <RepoIcon />
                        <h3>{repo.name}</h3>
                      </div>
                      <p>{repo.description}</p>
                    </div>
                    <div className="repo__stats">
                      <div className="repo__stats--left">
                        <span>
                          <div
                            className="language"
                            style={{ backgroundColor: langColors[repo.language] }}
                          />
                          {repo.language}
                        </span>
                        <span>
                          <StarIcon />
                          {repo.stargazers_count.toLocaleString()}
                        </span>
                        <span>
                          <RepoForkedIcon />
                          {repo.forks.toLocaleString()}
                        </span>
                      </div>
                      <div className="repo__stats--right">
                        <span>{repo.size.toLocaleString()} KB</span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </FlipMove>
          ) : (
            <p>No available repositories!</p>
          )}
        </div>
      </ReposStyles>
    </Section>
  );
};

Repos.propTypes = {
  repoData: PropTypes.array.isRequired,   
};

export default Repos;
