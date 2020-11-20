import React from 'react';

import Button from '@material-ui/core/Button';

import useStyles from './styles';

const Footer = ({ classes: propClasses }) => {
  const classes = useStyles();

  return (
    <footer
      className={`${classes.appFooter} ${propClasses}`}
    >
      <Button
        href="https://github.com/johnclaude12/reactjs-mater-ui-template"
        target="_blank"
        size="small"
        color="primary"
      >Material-UI Starter Tempalte</Button>
      
      <span className={classes.title}>&copy; 2020 John Claude Maghanoy</span>
   </footer>
  )
};

export default Footer;