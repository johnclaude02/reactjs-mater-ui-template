import React, { useState } from 'react';

import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../Header/Header';
import SideBar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

import useStyles from './styles';
import useContentStyles from '../Content/styles';

const MainLayout = () => {
    const classes = useStyles();
    const contentClasses = useContentStyles();
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

        
        <main
          className={`
            ${contentClasses.content} 
            ${open ? contentClasses.shorterContent : contentClasses.longerContent}`
          }
        >
          <Content />
          
          <Footer />
        </main>
      </div>
    );
};

export default MainLayout;