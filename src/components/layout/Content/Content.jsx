import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Spinner from '../../common/Spinner';

import Container from '@material-ui/core/Container';

import useStyles from './styles';

import routes from '../../../route';

const Content = () => {
  const classes = useStyles();

  return (
    <Suspense fallback={<Spinner disableShrink />}>
      <div className={classes.toolbar} />
      <Container className={classes.container}>
        <Switch>
          {routes.map((route, index) => {
            return (
              route.component && (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  name={route.name}
                  component={route.component}
                />
              )
            )
          })}
        </Switch>
      </Container>
    </Suspense>
  );
};

export default Content;