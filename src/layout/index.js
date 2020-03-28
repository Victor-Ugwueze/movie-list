import React, { Fragment } from 'react';
import SearchBar from '../components/SearchBar';

export default function Layout({ children }) {
  return (
    <Fragment>
      <header>
        <SearchBar />
      </header>
      <main class="container">{children}</main>
    </Fragment>
  );
}
