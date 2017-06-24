import React from 'react';
import glamorous from 'glamorous';

import ProductRecommendationItem from './ProductRecommendationItem';

const convertUrl = products => (
  JSON.parse(JSON.stringify(products).replace(/image_url/g, 'imageUrl'))
);

const FloatingWrapper = glamorous.div({
  position: 'absolute',
  zIndex: 9999,
  width: '100%',
  left: 0,
  top: 48,
  backgroundColor: 'white',
  borderBottomRightRadius: 5,
  borderBottomLeftRadius: 5,
  overflow: 'hidden',
  height: 'auto',
});

const ListHeading = glamorous.div({
  color: '#666',
  padding: 10,
  fontSize: '0.8em',
  fontWeight: 'bold',
});

const ListWrapper = glamorous.div({
  paddingBottom: 5,
});

export default ({ products }) => (
  <FloatingWrapper>
    <ListHeading>PRODUCTS</ListHeading>
    <ListWrapper>
      { convertUrl(products).filter(p => p.id < 6).map(product => (
        <ProductRecommendationItem key={product.id} {...product} />
      ))}
    </ListWrapper>
  </FloatingWrapper>
);
