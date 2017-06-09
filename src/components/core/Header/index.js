import React from 'react';

import Headerbar from './Headerbar';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Navbar from './Navbar';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchFocus: false,
      renderScreenOverlay: () => (null),
    };

    this.handleSearchFocus = this.handleSearchFocus.bind(this);
    this.handleSearchBlur = this.handleSearchBlur.bind(this);
  }

  handleSearchFocus() {
    this.setState({
      isSearchFocus: true,
    }, this.toggleScreenFocusOverlay);
  }

  handleSearchBlur() {
    this.setState({
      isSearchFocus: false,
    }, this.toggleScreenFocusOverlay);
  }

  toggleScreenFocusOverlay() {
    if (this.state.isSearchFocus) {
      import('./ScreenFocusOverlay').then((TheComponent) => {
          this.setState({
            renderScreenOverlay: TheComponent.default,
          });
        }).catch((err) => {
          console.log(err);
        });
    }
    this.setState({
      renderScreenOverlay: () => (null),
    });
  }

  render() {
    const { isSearchFocus, renderScreenOverlay } = this.state;
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
        { renderScreenOverlay() }
      </div>
    );
  }
}
