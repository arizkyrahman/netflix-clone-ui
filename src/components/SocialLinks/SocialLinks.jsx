import React, { Component } from 'react'

import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import TwitterIcon from './TwitterIcon';
import YoutubeIcon from './YoutubeIcon';

import styles from './SocialLinks.module.css';

export default class SocialLinks extends Component {
  render() {
    return (
      <div className={styles.box}>
        <a href='facebook.com' className={styles.IconLink}>
        <FacebookIcon />
        </a>
        <a href='instagram.com' className={styles.IconLink}>
        <InstagramIcon />
        </a>
        <a href='twitter.com' className={styles.IconLink}>
        <TwitterIcon />
        </a>
        <a href='youtube.com' className={styles.IconLink}>
        <YoutubeIcon /> 
        </a>
      </div>
    )
  }
}