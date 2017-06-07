import React from 'react';

import ProductList from '../components/products/List';
import WideSection from '../components/core/Layout/WideSection';

export default class HomePage extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: 100 }}>
        <WideSection>
          <ProductList />
        </WideSection>
        <WideSection>
          <ProductList />
        </WideSection>
      </div>
    );
  }
}
