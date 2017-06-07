import React from 'react';

import ProductList from '../components/products/List';
import WideSection from '../components/core/Layout/WideSection';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Featured Products</h1>
        <WideSection>
          <h2>New Releases</h2>
          <ProductList />
        </WideSection>
      </div>
    );
  }
}
