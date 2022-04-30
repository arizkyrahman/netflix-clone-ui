import React, { Component } from 'react'

import styles from './Notifications.module.css';
import NotificationsIcon from './NotificationsIcon'

export default class Notifications extends Component {
  render() {
    return (
      <div className={styles.notifications}>
        <NotificationsIcon />
      </div>
    )
  }
}