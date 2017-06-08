import React from 'react';
import glamorous from 'glamorous';

import Item from './Item';
import SectionHeading from '../core/Layout/SectionHeading';

import data from '../../data/db.json';

const stringifiedProducts = JSON.stringify(data.products);
const replacedKeyProduct = stringifiedProducts.replace(/image_url/g, 'imageUrl');
const products = JSON.parse(replacedKeyProduct);

const Row = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
});

export default () => (
  <div>
    <SectionHeading>New Releases</SectionHeading>
    <Row>
      { products.map(product => <Item key={product.id} {...product} />)}
    </Row>
  </div>
);
