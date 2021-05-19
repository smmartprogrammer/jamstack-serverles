import React from 'react';
import Header from '../components/header';
import Layout from '../components/Layout';
import styles from './about.module.css';

export default function About() {
  return (
    <Layout headerTitle="About page header">
      <div>About Page</div>
      <div className={styles.myTitle}>Second div</div>
    </Layout>
  );
}
