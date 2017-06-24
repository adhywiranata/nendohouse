import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/core/Header';
import { selectAllProducts } from '../../reducers/productReducer';

class HeaderWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchFocus: false,
      searchKeyword: '',
    };

    this.handleSearchFocus = this.handleSearchFocus.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchBlur = this.handleSearchBlur.bind(this);
  }

  handleSearchFocus() {
    this.setState({
      isSearchFocus: true,
    });
  }

  handleSearchInput(searchKeyword) {
    this.setState({
      searchKeyword,
    });
  }

  handleSearchBlur() {
    this.setState({
      isSearchFocus: false,
    });
  }

  render() {
    return (
      <Header
        products={this.props.products}
        searchKeyword={this.state.searchKeyword}
        isSearchFocus={this.state.isSearchFocus}
        handleSearchFocus={this.handleSearchFocus}
        handleSearchInput={this.handleSearchInput}
        handleSearchBlur={this.handleSearchBlur}
      />
    );
  }
}

const mapStateToProps = state => ({
  products: selectAllProducts(state.products),
});

export default connect(mapStateToProps, null)(HeaderWrapper);
