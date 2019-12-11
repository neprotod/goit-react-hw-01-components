import React from 'react';

import './App.css';

import Profile from '../Profile';
// Get moke database date
import user from '../../db/user.json';

const App = () => {
  return <Profile user={user} />;
};

export default App;
