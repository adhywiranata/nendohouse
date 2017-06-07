import React from 'react';
import glamorous from 'glamorous';

import Card from '../core/Layout/Card';
import LazyImage from '../core/Layout/LazyImage';
import { Info, Title, Seller, Location, Price } from './Info';

const ResponsiveItem = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  width: '17vw',
  '@media(max-width: 1024px)': {
    width: '23vw',
  },
  '@media(max-width: 768px)': {
    width: '38vw',
  },
  '@media(max-width: 480px)': {
    width: '100vw',
  },
});

export default () => (
  <ResponsiveItem>
    <Card>
      <LazyImage />
      <Info>
        <Title>Izumi Sagiri</Title>
        <Seller>I Gusti Nyoman</Seller>
        <Location>Jakarta</Location>
        <Price>Rp. 550.000</Price>
      </Info>
    </Card>
  </ResponsiveItem>
);
