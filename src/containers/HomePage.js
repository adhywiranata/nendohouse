import React from 'react';

import ProductList from '../components/products/List';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Featured Waifus</h1>
        <div>
          <h2>New Releases</h2>
          <ProductList />
        </div>
      </div>
    );
  }
}
