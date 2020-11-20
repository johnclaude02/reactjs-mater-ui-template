import React, { useState } from 'react';

import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../Header/Header';
import SideBar from '../Sidebar/Sidebar';
import Content from '../Content/Content';

import useStyles from './styles';

const MainLayout = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(true);

    const toggleDrawer = () => setOpen(!open);

    return (
      <div className={classes.root}>
        <CssBaseline />

        <Header
          open={open}
          toggleDrawer={toggleDrawer}
          classes={classes}
        />

        <SideBar
          open={open}
          toggleDrawer={toggleDrawer}
          classes={classes}
          theme={theme}
        />

        <Content
          open={open}
          classes={classes}
        />
      </div>
    );
};

export default MainLayout;