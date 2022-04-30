import React, { Component } from 'react'

import styles from './BillboardSettings.module.css';
import BillboardSettingsIcon from './BillboardSettingsIcon'

export default class BillboardSettings extends Component {
  render() {
    return (
      <div className={styles.billboardsettings}>
        <BillboardSettingsIcon />
      </div>
    )
  }
}