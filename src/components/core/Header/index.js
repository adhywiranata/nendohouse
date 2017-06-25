import React from 'react';
import { Link } from 'react-router-dom';
import { LazyComponent } from 'react-code-split-component';

import Headerbar from './Headerbar';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Navbar from './NavBar';

export default ({
  products,
  searchKeyword,
  isSearchFocus,
  handleSearchFocus,
  handleSearchInput,
  handleSearchBlur,
}) => (
  <div>
    <Headerbar>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo>NENDOHOUSE</Logo>
      </Link>
      <SearchBar
        searchKeyword={searchKeyword}
        isSearchFocus={isSearchFocus}
        products={products}
        handleSearchBlur={handleSearchBlur}
        handleSearchInput={handleSearchInput}
        handleSearchFocus={handleSearchFocus}
      />
      <Navbar />
    </Headerbar>
    { isSearchFocus ? <LazyComponent load={() => import('./ScreenFocusOverlay')} /> : null }
  </div>
);
