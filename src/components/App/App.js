import React from 'react';

import './App.css';

import Profile from '../Profile';
import Statistics from '../Statistics';
import FriendList from '../FriendList';
import TransactionHistory from '../TransactionHistory';
// Get moke database date
import user from '../../db/user.json';
import stats from '../../db/statistical-data.json';
import friends from '../../db/friends.json';
import transactions from '../../db/transactions.json';

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stat" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
