import React from 'react';
import glamorous from 'glamorous';
import { colors } from '../../constants';

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
  '& button': {
    opacity: 0,
    bottom: -5,
    transition: '0.2s',
  },
  ':hover': {
    '& button': {
      opacity: 1,
      bottom: 0,
      transition: '0.2s',
    },
  },
});


const BuyButton = glamorous.button({
  color: colors.white,
  backgroundColor: colors.green,
  fontSize: 18,
  padding: 10,
  border: 0,
  width: '100%',
  position: 'absolute',
  bottom: 0,
  cursor: 'pointer',
  borderBottomRightRadius: 5,
  borderBottomLeftRadius: 5,
  fontWeight: 'bold',
  outline: 0,
});

export default () => (
  <ResponsiveItem>
    <Card style={{ position: 'relative', padding: 0, paddingBottom: 30 }}>
      <LazyImage />
      <Info>
        <Title>Izumi Sagiri</Title>
        <Seller>I Gusti Nyoman</Seller>
        <Location>Jakarta</Location>
        <Price>Rp. 550.000</Price>
      </Info>
      <BuyButton>BUY</BuyButton>
    </Card>
  </ResponsiveItem>
);
