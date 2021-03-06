import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo height='80%' />
      <nav className={classes.DesktopOnly}>
        <Navigation />
      </nav>
    </header>
  );
};

export default toolbar;
