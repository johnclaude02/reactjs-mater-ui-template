import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles'

import Login from './components/auth/Login';
import MainLayout from './components/layout/MainLayout/MainLayout';

import theme from  './components/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <MainLayout />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;