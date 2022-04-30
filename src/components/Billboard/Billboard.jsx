import React, { Component } from 'react'

import billboardHeroImg from './assets/billboard.webp';
import billboardHeroTitle from './assets/billboard-title.webp';

import PlayIcon from './PlayIcon';
import InfoIcon from './InfoIcon';

import styles from './Billboard.module.css';

export default class Billboard extends Component {
  render() {
    return (
      <div className={styles.billboard}>
        <div className={styles.innerBillboard}>
          <img className={styles.imgHero} src={billboardHeroImg} alt='Abstract: The Art of Design'/>
          <div className={styles.fadeOut}></div>
          <div className={styles.info}>
            <img src={billboardHeroTitle} alt='' />
            <div className={styles.description}>
              Step inside the minds of the most innovative designers
              in a variety of disciplines and learn how design impacts
              every aspect of life.
            </div>
            <div className={styles.buttons}>
              <button className={styles.playBtn} type='button'>
                <PlayIcon /> 
                <span className={styles.play} >Play</span>
              </button>
              <button className={styles.infoBtn} type='button'>
                <InfoIcon />
                <span className={styles.moreInfo} >More Info</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
};