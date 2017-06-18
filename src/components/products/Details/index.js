import React from 'react';

import Product from './Product';
import SellerInfo from './SellerInfo';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <Product />
    <SellerInfo />
  </div>
);
