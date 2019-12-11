import React from 'react';
import PropType from 'prop-types';
import clsx from 'clsx';

import style from './FriendList.module.css';

/**
 *  Get friends component
 *
 *  @component
 *  @example
 *  return (
 *    <FriendList friends={friends} />;
 *  )
 */
const FriendList = ({ friends }) => {
  const lis = friends.map(elem => {
    const statusClass = clsx(style.status, elem.isOnline && style.active);

    return (
      <li key={elem.id} className={style.item}>
        <span className={statusClass} />
        <img className={style.avatar} src={elem.avatar} alt="" width="48" />
        <p className={style.name}>{elem.name}</p>
      </li>
    );
  });

  return <ul className={style['friend-list']}>{lis}</ul>;
};

FriendList.propTypes = {
  friends: PropType.arrayOf(
    PropType.shape({
      id: PropType.any.isRequired,
      name: PropType.string.isRequired,
      avatar: PropType.string.isRequired,
      isOnline: PropType.bool,
    }),
  ).isRequired,
};

export default FriendList;
