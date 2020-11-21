import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStayles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-50px',
  }
}));

const Spinner = props => {
  const classes = useStayles();

  return (
    <CircularProgress
      className={classes.root}
      size={60}
      thickness={6}
      {...props}
    />
  );
}

export default Spinner;