import React from 'react';
import glamorous from 'glamorous';

import Item from './Item';
import SectionHeading from '../core/Layout/SectionHeading';

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
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Row>
  </div>
);
