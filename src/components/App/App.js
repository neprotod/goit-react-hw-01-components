import React from 'react';

import Profile from '../Profile';
// Get moke database date
import user from '../../db/user.json';

const App = () => {
  return <Profile user={user} />;
};

export default App;
