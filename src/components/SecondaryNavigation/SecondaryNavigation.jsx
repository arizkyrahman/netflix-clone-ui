import React, { Component } from 'react'

import styles from './SecondaryNavigation.module.css';
import Search from '../Search'
import Notifications from '../Notifications';
import UserMenu from '../UserMenu';
import BillboardSettings from '../BillboardSettings';

export default class SecondaryNavigation extends Component {
  render() {
    return (
      <div className={styles.box}>
        <div className={styles.navItem}>
        <Search />
        </div>
        <div className={styles.navItem}>
        <Notifications />
        </div>
        <div className={styles.navItem}>
        <UserMenu />
        </div>
        <div className={styles.navItem}>
        <BillboardSettings />
        </div>
      </div>
    )
  }
}
