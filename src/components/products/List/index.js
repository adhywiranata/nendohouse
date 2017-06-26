import React from 'react';
import glamorous from 'glamorous';

import Item from './Item';
import SectionHeading from '../../core/Layout/SectionHeading';

import { convertProductImageUrl } from '../../../helpers/productHelpers';

const Row = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
});

export default ({ products, isProductsFetching, isFetchingError }) => (
  <div>
    <SectionHeading>New Releases</SectionHeading>
    {isProductsFetching && <h2>Loading</h2>}
    {isFetchingError && (
      <p>Ooops! Error when loading your products :( Sorry for the inconvenience.</p>)}
    <Row>
      { convertProductImageUrl(products).map(product => <Item key={product.id} {...product} />)}
    </Row>
  </div>
);
