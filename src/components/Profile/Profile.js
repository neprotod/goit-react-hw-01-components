import React from 'react';
import PropType from 'prop-types';
import shortid from 'shortid';

import Stat from '../Stat';

/**
 *  Profile component
 *
 *  @component
 *  @example
 *  return (
 *    <Profile user={user} />;
 *  )
 */
const Profile = ({ user }) => {
  const { stats } = user;

  const toList = [
    { label: 'Followers', value: stats.followers, id: shortid() },
    { label: 'Views', value: stats.views, id: shortid() },
    { label: 'Likes', value: stats.likes, id: shortid() },
  ];

  return (
    <div className="profile">
      <div className="description">
        <img alt="user avatar" className="avatar" src={user.avatar} />
        <p className="name">{user.name}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>

        <Stat ulClass="state" list={toList} />
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropType.shape({
    name: PropType.string.isRequired,
    avatar: PropType.string.isRequired,
    tag: PropType.string.isRequired,
    location: PropType.string.isRequired,
    stats: PropType.shape({
      followers: PropType.number.isRequired,
      views: PropType.number.isRequired,
      likes: PropType.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;
