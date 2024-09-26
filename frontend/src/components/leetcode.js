import React, { useState } from 'react';
import axios from 'axios';
import UserInfo from './userinfol';
import RecentProblems from './recentproblems';
import GlobalStyle from './styles/GlobalStyle';
import AppStyles from './styles/AppStyles';
import InputStyles from './styles/InputStyles';
import ButtonStyles from './styles/ButtonStyles';
import Navbar from './unavbar';

const Leetcode = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [recentProblems, setRecentProblems] = useState([]);
  const [badges, setBadges] = useState([]);

  const fetchLeetcodeData = async () => {
    try {
      // Fetching full user profile data
      const profileResponse = await axios.get(
        `https://alfa-leetcode-api.onrender.com/userProfile/${username}`
      );

      // Fetching last 20 submissions
      const submissionsResponse = await axios.get(
        `https://alfa-leetcode-api.onrender.com/${username}/submission`
      );
      
      // Fetching user badges
      const badgesResponse = await axios.get(
        `https://alfa-leetcode-api.onrender.com/${username}/badges`
      );

      setUserData(profileResponse.data);
      setRecentProblems(submissionsResponse.data.submission || []);
      setBadges(badgesResponse.data.badges || []);
    } catch (error) {
      console.error('Error fetching data from LeetCode', error);
      setUserData(null);
      setRecentProblems([]);
      setBadges([]);
    }
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleButtonClick = () => {
    fetchLeetcodeData();
  };

  return (
    <div>
      <Navbar />
      <AppStyles>
        <GlobalStyle />
        <h1 style={{ color: 'white' }}>Type Your LeetCode Username</h1>
        <InputStyles
          type="text"
          placeholder="Enter LeetCode Username"
          value={username}
          onChange={handleInputChange}
        />
        <ButtonStyles onClick={handleButtonClick}>Search</ButtonStyles>
        {userData && <UserInfo userData={userData} badges={badges} />}
        {recentProblems.length > 0 && <RecentProblems recentProblems={recentProblems} />}
      </AppStyles>
    </div>
  );
};

export default Leetcode;
