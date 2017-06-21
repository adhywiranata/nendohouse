import React from 'react';
import glamorous from 'glamorous';

import Item from './Item';
import SectionHeading from '../../core/Layout/SectionHeading';

const convertUrl = products => (
  JSON.parse(JSON.stringify(products).replace(/image_url/g, 'imageUrl'))
);

const Row = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
});

export default ({ products, isProductsFetching }) => (
  <div>
    <SectionHeading>New Releases</SectionHeading>
    {isProductsFetching && <h2>Loading</h2>}
    <Row>
      { convertUrl(products).map(product => <Item key={product.id} {...product} />)}
    </Row>
  </div>
);
