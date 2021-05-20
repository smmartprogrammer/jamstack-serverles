import React from 'react';
import Layout from '../components/Layout';
import { Router } from '@reach/router';

export default function home() {
  return (
    <Layout headerTitle="About Page Header">
      <div>About Home</div>
      <div>
        <Router basepath="/"></Router>
      </div>
    </Layout>
  );
}   
