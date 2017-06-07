import React from 'react';
import glamorous from 'glamorous';

import Item from './Item';

const Row = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
});

export default () => (
  <Row>
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
  </Row>
);
