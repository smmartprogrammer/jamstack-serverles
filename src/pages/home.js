import React from 'react';
import Layout from '../components/Layout';
import { Router } from '@reach/router';
import Client1 from './client1';
import Client2 from './Client2';
import { Link } from 'gatsby';

export default function home() {
  return (
    <Layout headerTitle="About Page Header">
      <div>
        About Home
        <Link to="/home/client1">Client 1 </Link>
        <br />
        <Link to="/home/client2">Client 2 </Link>
        <br />
      </div>
      <div>
        <Router basepath="/home">
          <Client1 path="/client1" />
          <Client2 path="/client2" />
        </Router>
      </div>
    </Layout>
  );
}
