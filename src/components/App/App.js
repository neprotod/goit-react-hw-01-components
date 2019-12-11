import React from 'react';

import './App.css';

import Profile from '../Profile';
import Statistics from '../Statistics';
// Get moke database date
import user from '../../db/user.json';
import stats from '../../db/statistical-data.json';

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stat" stats={stats} />
    </>
  );
};

export default App;
