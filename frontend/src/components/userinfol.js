import React from 'react';
import PropTypes from 'prop-types';
import UserInfoStyles from './styles/UserInfoStyles';
import Section from './styles/Section';

const UserInfo = ({ userData, badges }) => (
  <Section dark>
    <UserInfoStyles>
      <h1>{userData.name}</h1>
      <img
        src={userData.avatar || 'https://via.placeholder.com/150'}
        alt={`${userData.name}'s profile`}
        style={{ borderRadius: '50%', width: '100px', height: '100px' }}
      />
      <div className="info">
        <p>Country: {userData.country || 'Not specified'}</p>
        <p>Ranking: {userData.ranking}</p>
        <p>Reputation: {userData.reputation}</p>
      </div>
      <div className="info">
        <p>Easy Problems Solved: {userData.easySolved}</p>
        <p>Medium Problems Solved: {userData.mediumSolved}</p>
        <p>Hard Problems Solved: {userData.hardSolved}</p>
        <div className="stats">
          <div className="stats__item">
            <span className="num">{userData.totalSolved}</span>
            <span className="num-label">Total Problems Solved</span>
          </div>
          <div className="stats__item">
            <span className="num">{userData.totalQuestions}</span>
            <span className="num-label">Total Problems Available</span>
          </div>
        </div>
      </div>

      {/* Display Badges */}
      <div className="badges">
        <h3>Badges:</h3>
        <div className="badges-container flex justify-center items-center space-x-4">
  {badges.length > 0 ? (
    badges.slice(0, 2).map((badge, index) => (
      <img
        key={index}
        src={badge.icon}
        alt={badge.displayName}
        title={badge.displayName}
        className="w-16 h-16" // Tailwind CSS for width and height
      />
    ))
  ) : (
    <p>No badges earned!</p>
  )}
</div>

      </div>
    </UserInfoStyles>
  </Section>
);

UserInfo.propTypes = {
  userData: PropTypes.object.isRequired,
  badges: PropTypes.array.isRequired,
};

export default UserInfo;
