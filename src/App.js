import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles'

import MainLayout from './components/layout/MainLayout/MainLayout';

import theme from  './components/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <MainLayout />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;