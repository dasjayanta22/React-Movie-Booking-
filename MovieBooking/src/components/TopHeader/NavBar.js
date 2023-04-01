import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavBarStyles from './NavBarStyle'

import Search from '../Search/Search'


const NavBar = () => {
  const classes = NavBarStyles();
  return (
    <div >
        <AppBar>
          <Toolbar className={classes.headerContainer}>
            <div className={classes.title}>
              E-CUBE
            </div>
            <div className={classes.search}>
              <Search/>
            </div>
          </Toolbar>
        </AppBar>
    </div>
  );
}
export default NavBar;