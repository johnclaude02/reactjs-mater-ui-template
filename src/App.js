import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <MainLayout />
      </Switch>
    </Router>
  );
}

export default App;