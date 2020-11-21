import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Spinner from '../../common/Spinner';

import useStyles from './styles';

import routes from '../../../route';

const Content = () => {
  const classes = useStyles();

  return (
    <Suspense fallback={<Spinner disableShrink />}>
      <div className={classes.toolbar} />
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
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
        donec massa sapien faucibus et molestie ac.
      </Typography>
    </Suspense>
  );
};

export default Content;