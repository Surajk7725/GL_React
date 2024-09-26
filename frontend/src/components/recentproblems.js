import React from 'react';
import PropTypes from 'prop-types';
import RecentProblemsStyles from './styles/RecentProblemsStyles';

const RecentProblems = ({ recentProblems }) => {
  return (
    <RecentProblemsStyles>
      <div className="container">
        <div className="inner-container">
          <h2>Recent Problems</h2>
          
          <div className="grid">
            {recentProblems.length > 0 ? (
              recentProblems.slice(0, 10).map((problem, index) => (
                <div key={index} className="card">
                  <a
                    href={`https://leetcode.com/problems/${problem.titleSlug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>{problem.title}</h3>
                    <p>Submitted: {new Date(problem.timestamp * 1000).toLocaleString()}</p>
                  </a>
                </div>
              ))
            ) : (
              <p className="empty-message">No recent problems found!</p>
            )}
          </div>
        </div>
      </div>
    </RecentProblemsStyles>
  );
};

RecentProblems.propTypes = {
  recentProblems: PropTypes.array.isRequired,
};

export default RecentProblems;
