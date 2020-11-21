import React, { Fragment, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';

import Icon from '@material-ui/core/Icon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import navigation from './_nav';

const SidebarItem = ({ classes }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (navItem) => {
    if (navItem.children.length > 0) setMenuOpen(!menuOpen);
  };

  return (
    <Fragment>
      {navigation.map((navItem, index) => (
        <Fragment key={index} >
          <Link to={navItem.link || location.pathname} className={classes.link}>
            <ListItem button onClick={() => handleClick(navItem)}>
              <ListItemIcon>
                <Icon component={navItem.icon} />
              </ListItemIcon>
              <ListItemText primary={navItem.label} />
              {navItem.children && navItem.children.length > 0 && (
                menuOpen ? <ExpandLess /> : <ExpandMore />
              )}
            </ListItem>
          </Link>

          {navItem.children.length > 0 && (
            <Collapse in={menuOpen} timeout="auto" unmountOnExit>
              {navItem.children.map((subItem, idx) => (
                <List
                  component="div"
                  disablePadding
                  key={idx}
                >
                  <Link to={subItem.link} className={classes.link}>
                    <ListItem
                      button
                      alignItems="center"
                      className={classes.listItem}
                    >
                      <ListItemText primary={subItem.label} />
                    </ListItem>
                  </Link>
                </List>
              ))}
            </Collapse>
          )}
        </Fragment>
      ))}
    </Fragment>
  );
};
  

export default SidebarItem;