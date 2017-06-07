import React from 'react';

import Card from '../core/Layout/Card';
import { Info, Title, Seller, Location, Price } from './Info';

export default () => (
  <Card>
    <img src="http://images.goodsmile.info/cgm/images/product/20170526/6467/45602/large/f09416643e5fb327c6de0e98cadbf025.jpg" alt="wow" width="100%" />
    <Info>
      <Title>Izumi Sagiri</Title>
      <Seller>I Gusti Nyoman</Seller>
      <Location>Jakarta</Location>
      <Price>Rp. 550.000</Price>
    </Info>
  </Card>
);
