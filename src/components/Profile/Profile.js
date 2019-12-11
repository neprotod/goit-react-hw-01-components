import React from 'react';
import PropType from 'prop-types';
import shortid from 'shortid';
import clsx from 'clsx';

import Stat from '../Stat';

import style from './Profile.module.css';

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

  // Class
  const classTag = clsx(style.tag, style.info);
  const classlocation = clsx(style.location, style.info);

  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img alt="user avatar" className={style.avatar} src={user.avatar} />
        <p className={style.name}>{user.name}</p>
        <p className={classTag}>@{user.tag}</p>
        <p className={classlocation}>{user.location}</p>

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
