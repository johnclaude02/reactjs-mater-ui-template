import React, { Fragment, useState } from 'react';

import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import useStyles from './styles';

const SideBar = ({ open, toggleDrawer, theme }) => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

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
        className={open && classes.navList}
      >
        <ListItem button>
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <PeopleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="UsersUsersUsersUsersUsersUsersUsersUsersUsers" />
          {menuOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={menuOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem alignItems="center" button className={classes.listItem}>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default SideBar;