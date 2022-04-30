import React, { Component } from 'react'


import Segment from '../Segment';
import styles from './Titles.module.css';

export default class Titles extends Component {
  render() {
    return (
      <div className={styles.titles}>
        <Segment title="Popular on Netflix"/>
        <Segment title="Continue Watching For Home"/>
        <Segment title="Trending Now"/>
        <Segment title="Watch It Again"/>
      </div>
    );
  };
};