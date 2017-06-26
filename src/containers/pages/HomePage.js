// @flow
import React from 'react';
import { connect } from 'react-redux';
import localforage from 'localforage';

import { selectAllProducts } from '../../reducers/productReducer';
import { fetchProducts } from '../../actions';

import ParallaxCover from '../../components/home/ParallaxCover';
import ProductList from '../../components/products/List';
import WideSection from '../../components/core/Layout/WideSection';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: window.navigator.onLine,
      products: [],
    };
  }

  componentDidMount() {
    if (window.navigator.onLine) {
      this.props.fetchProducts();
    } else {
      localforage.getItem('products', (err, value) => {
        if (value) {
          this.setState({ products: value });
        }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      products: nextProps.products,
    });
    localforage.setItem('products', nextProps.products);
  }

  props: {
    fetchProducts: func,
    products: [],
    isProductsFetching: boolean,
    isFetchingError: boolean,
  }

  render() {
    return (
      <div style={{ paddingTop: 60 }}>
        <ParallaxCover />
        <WideSection>
          <ProductList
            products={this.state.products}
            isProductsFetching={this.props.isProductsFetching}
            isFetchingError={this.props.isFetchingError}
          />
        </WideSection>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: selectAllProducts(state.products, state.categories),
  isProductsFetching: state.products.isFetching,
  isFetchingError: state.products.isError,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
