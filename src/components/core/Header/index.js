import React from 'react';
import { Link } from 'react-router-dom';
import { LazyComponent } from 'react-code-split-component';

import Headerbar from './Headerbar';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Navbar from './NavBar';

const MainLogo = () => (
  <Link to="/" style={{ textDecoration: 'none' }}>
    <Logo>NENDOHOUSE</Logo>
  </Link>
);

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
    window.addEventListener('resize', () => {
      this.setState({
        windowWidth: window.innerWidth,
      });
    });
  }

  render() {
    const {
      products,
      searchKeyword,
      isSearchFocus,
      handleSearchFocus,
      handleSearchInput,
      handleSearchBlur,
    } = this.props;
    const { windowWidth } = this.state;
    return (
      <div>
        <Headerbar>
          { windowWidth < 768 ? (
            <MainLogo />
          ) : (
            <div style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
            >
              <div style={{ paddingTop: 10 }}>
                <MainLogo />
              </div>
              <SearchBar
                searchKeyword={searchKeyword}
                isSearchFocus={isSearchFocus}
                products={products}
                handleSearchBlur={handleSearchBlur}
                handleSearchInput={handleSearchInput}
                handleSearchFocus={handleSearchFocus}
              />
              <Navbar />
            </div>
          )}
        </Headerbar>
        { isSearchFocus ? <LazyComponent load={() => import('./ScreenFocusOverlay')} /> : null }
      </div>
    );
  }
}
