import React, { Component } from 'react'

import SocialLinks from '../SocialLinks';
import FooterLinks from '../FooterLinks';

import styles from './Footer.module.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.box}>
        <div className={styles.sociallinks}>
        <SocialLinks />
        </div>
        <FooterLinks />
      </footer>
    )
  }
}