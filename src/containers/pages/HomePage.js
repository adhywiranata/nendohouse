// @flow
import React from 'react';
import { connect } from 'react-redux';

import { selectAllProducts } from '../../reducers/productReducer';
import { fetchProducts } from '../../actions';

import ParallaxCover from '../../components/home/ParallaxCover';
import ProductList from '../../components/products/List';
import WideSection from '../../components/core/Layout/WideSection';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  props: {
    fetchProducts: func,
    products: [],
    isProductsFetching: boolean,
  }

  render() {
    return (
      <div style={{ paddingTop: 60 }}>
        <ParallaxCover />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
