import React, { Component } from 'react'

import styles from './UserMenu.module.css';

export default class UserMenu extends Component {
  render() {
    return (
      <div className={styles.UserMenu}>
        <div className={styles.user}></div>
      </div>
    )
  }
}