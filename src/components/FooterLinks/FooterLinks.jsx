import React, { Component } from 'react'

import styles from './FooterLinks.module.css';

export default class FooterLinks extends Component {
  render() {
    const links = [
      'Audio and Subtitles',
      'Audio Description',
      'Help Center',
      'Gift Cards',
      'Media Center',
      'Investor Relation',
      'Jobs',
      'Terms of Use',
      'Privacy',
      'Legal Notice',
      'Cookie Preferences',
      'Impressum',
      'Contact Us',
    ];

    return (
      <ul className={styles.linksList}>
        {links.map(link => (
          <li className={styles.link} key={link}>
            <a href='/'>{link}</a>
          </li>
        ))}
      </ul>
    );
  };
}