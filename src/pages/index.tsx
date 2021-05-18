import React from 'react';
import { Link, navigate } from 'gatsby';
import Header from '../components/header';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout headerTitle="Index page header">
      <Header title="Index Page" />
      hello world...!!!
      <br />
      <Link to="/about">About Page </Link>
      <br />
      <button
        onClick={() => {
          navigate('/about');
        }}
      >
        About Page with Button
      </button>
    </Layout>
  );
}
