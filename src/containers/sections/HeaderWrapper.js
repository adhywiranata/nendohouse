import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/core/Header';
import { selectAllProducts } from '../../reducers/productReducer';
import { setHeaderSearchKeyword } from '../../actions';

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
    this.props.setSearchKeyword(searchKeyword);
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
        searchKeyword={this.props.searchKeyword}
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
  searchKeyword: state.headerSearch.searchKeyword,
});

const mapDispatchToProps = dispatch => ({
  setSearchKeyword: searchKeyword => dispatch(setHeaderSearchKeyword(searchKeyword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWrapper);
