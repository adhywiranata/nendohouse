import React from 'react';

import Card from '../core/Layout/Card';
import LazyImage from '../core/Layout/LazyImage';
import { Info, Title, Seller, Location, Price } from './Info';

export default () => (
  <Card>
    <LazyImage />
    <Info>
      <Title>Izumi Sagiri</Title>
      <Seller>I Gusti Nyoman</Seller>
      <Location>Jakarta</Location>
      <Price>Rp. 550.000</Price>
    </Info>
  </Card>
);
