import React, { useState } from 'react';
import axios from 'axios';
import UserInfo from './userinfo';
import Repos from './repos';
import  GlobalStyle  from './styles/GlobalStyle';
import AppStyles from './styles/AppStyles';
import InputStyles from './styles/InputStyles';
import  ButtonStyles from './styles/ButtonStyles';
import Navbar from './unavbar';

const Github = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState([]);

  const fetchData = async () => {
    try {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
      setUserData(userResponse.data);
      setRepoData(reposResponse.data);
    } catch (error) {
      console.error('Error fetching data from GitHub', error);
      setUserData(null);
      setRepoData([]);
    }
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <div>
      <Navbar />
      <AppStyles>  {/* This code gives about the background color of whole website */}
      <GlobalStyle /> {/* This code gives about the global css of whole website */}
      <h1 style={{color: "white"}}>Type Your GitHub Username</h1>
      <InputStyles
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={handleInputChange}
      />
      <ButtonStyles onClick={handleButtonClick}>Search</ButtonStyles>
      {userData && <UserInfo userData={userData} />}
      {repoData.length > 0 && <Repos repoData={repoData} />}
      </AppStyles>
      </div>
  );
};

export default Github;
