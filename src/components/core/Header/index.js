import React from 'react';
import { LazyComponent } from 'react-code-split-component';

import Headerbar from './Headerbar';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Navbar from './NavBar';

export default ({ products, isSearchFocus, handleSearchFocus, handleSearchBlur }) => (
  <div>
    <Headerbar>
      <Logo>NENDOHOUSE</Logo>
      <SearchBar
        handleSearchBlur={handleSearchBlur}
        handleSearchFocus={handleSearchFocus}
        isSearchFocus={isSearchFocus}
      />
      <Navbar />
    </Headerbar>
    { isSearchFocus ? <LazyComponent load={() => import('./ScreenFocusOverlay')} /> : null }
  </div>
);
