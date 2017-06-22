import React from 'react';
import { connect } from 'react-redux';

import Breadcrumb from '../components/core/Layout/Breadcrumb';
import { selectProductsByCategory } from '../reducers/productReducer';
import { fetchProducts, fetchCategories } from '../actions';

import ProductList from '../components/products/List';
import WideSection from '../components/core/Layout/WideSection';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCategories();
  }

  render() {
    const { category, title } = this.props.match.params;
    return (
      <div style={{ paddingTop: 80 }}>
        <WideSection>
          <div>
            <Breadcrumb category={category} />
            <ProductList
              products={this.props.products}
              isProductsFetching={this.props.isProductsFetching}
            />
          </div>
        </WideSection>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const categoryName = state.router.location.pathname.split('/')[2];
  return {
    products: selectProductsByCategory(state.products, state.categories, categoryName),
    isProductsFetching: state.products.isFetching,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
