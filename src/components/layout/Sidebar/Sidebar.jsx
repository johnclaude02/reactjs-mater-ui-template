import React, { Fragment } from 'react';

import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import SidebarItem from './SidebarItem';

import useStyles from './styles';


const SideBar = ({ open, toggleDrawer, theme }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <Typography
          className={classes.brand}
          variant="h5"
          gutterBottom
        >
          BRAND
        </Typography>
        <IconButton onClick={toggleDrawer}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>

      <Divider />

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            className={classes.subHeader}
          >
            {
              open && (
                <Fragment>
                  <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                    JOHN CLAUDE MAGHANOY
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    ADMIN
                  </Typography>
                </Fragment>
              )
            }
          </ListSubheader>
        }
        className={open ? classes.navList : ''}
      >
        <SidebarItem 
          classes={classes} 
        />
      </List>
    </Drawer>
  );
};

export default SideBar;