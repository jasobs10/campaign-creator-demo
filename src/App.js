import React from 'react';

import './App.css';
import NavBar from './app/shared/navbar/navbar';
import CreateCampaign from './app/create-campaign/create-campaign';

const App = () => {
  return (
    <div>
      <NavBar />
      <CreateCampaign />
    </div>
  );
}

export default App;
