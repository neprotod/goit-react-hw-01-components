import React from 'react';

import './App.css';

import Profile from '../Profile';
import Statistics from '../Statistics';
import FriendList from '../FriendList';
// Get moke database date
import user from '../../db/user.json';
import stats from '../../db/statistical-data.json';
import friends from '../../db/friends.json';

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stat" stats={stats} />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
