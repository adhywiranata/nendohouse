import React from 'react';
import { connect } from 'react-redux';

import ProductList from '../components/products/List';
import WideSection from '../components/core/Layout/WideSection';

import { selectAllProducts } from '../reducers/productReducer';
import { fetchProducts } from '../actions';

class SearchResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
    };
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div style={{ paddingTop: 60 }}>
        <WideSection>
          <ProductList
            products={this.props.products}
            isProductsFetching={this.props.isProductsFetching}
          />
        </WideSection>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: selectAllProducts(state.products, state.categories),
  isProductsFetching: state.products.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultPage);
