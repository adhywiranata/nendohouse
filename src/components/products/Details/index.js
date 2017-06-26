import React from 'react';
import glamorous from 'glamorous';

import Product from './Product';
import SellerInfo from './SellerInfo';

const ProductDetailWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  '@media(max-width: 768px)': {
    flexDirection: 'column',
  },
});

export default () => (
  <ProductDetailWrapper>
    <Product />
    <SellerInfo />
  </ProductDetailWrapper>
);
