import React, { Component } from 'react'

import styles from './Search.module.css';
import SearchIcon from './SearchIcon'

export default class Search extends Component {
  render() {
    return (
      <div className={styles.search}>
        <SearchIcon />
      </div>
    )
  }
}