import React from 'react';
import LazyComponent from 'cra-webpack-code-splitting';

import Headerbar from './Headerbar';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Navbar from './NavBar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchFocus: false,
    };

    this.handleSearchFocus = this.handleSearchFocus.bind(this);
    this.handleSearchBlur = this.handleSearchBlur.bind(this);
  }

  handleSearchFocus() {
    this.setState({
      isSearchFocus: true,
    });
  }

  handleSearchBlur() {
    this.setState({
      isSearchFocus: false,
    });
  }

  render() {
    const { isSearchFocus } = this.state;
    return (
      <div>
        <Headerbar>
          <Logo>NENDOHOUSE</Logo>
          <SearchBar
            handleSearchBlur={this.handleSearchBlur}
            handleSearchFocus={this.handleSearchFocus}
            isSearchFocus={isSearchFocus}
          />
          <Navbar />
        </Headerbar>
        { isSearchFocus ? <LazyComponent load={() => import('./ScreenFocusOverlay')} /> : null }
      </div>
    );
  }
}

export default Header;
