import React from 'react';
import { Link, navigate } from 'gatsby';
import Header from '../components/header';

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
