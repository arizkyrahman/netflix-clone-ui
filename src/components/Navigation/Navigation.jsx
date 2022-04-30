import React, { Component } from 'react'

import styles from './Navigation.module.css';
import logo from './assets/netflix-logo.png';
import SecondaryNavigation from '../SecondaryNavigation';

export default class Navigation extends Component {
  render() {
    const navItems = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

    return (
      <div className={styles.navigation}>
        <div className={styles.mainNavigation}>
          <img className={styles.logo} src={logo} alt='logo' />
          <ul className={styles.navigationList}>
            {navItems.map(item => (
              <li className={styles.navigationItem} key={item}>
                <a href='/'>{item}</a> 
              </li>
            ))}
          </ul>
        </div>
        <SecondaryNavigation />
      </div>
    )
  }
}
