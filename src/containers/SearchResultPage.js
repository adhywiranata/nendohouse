import React from 'react';

import ProductList from '../components/products/List';
import WideSection from '../components/core/Layout/WideSection';

export default class SearchResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
    };
  }

  render() {
    return (
      <div style={{ paddingTop: 60 }}>
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
