import React from 'react';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom';

import { colors } from '../../../constants';
import Card from '../../core/Layout/Card';
import LazyImage from '../../core/Layout/LazyImage';
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
  fontSize: 16,
  padding: 10,
  border: 0,
  width: '100%',
  position: 'absolute',
  bottom: 0,
  cursor: 'pointer',
  borderBottomRightRadius: 5,
  borderBottomLeftRadius: 5,
  outline: 0,
  ':hover': {
  },
});

const toSlug = sentence => sentence.toLowerCase().split(' ').join('-');

export default ({ name, imageUrl, seller, price, location, category = { name: '', slug: '' } }) => (
  <ResponsiveItem style={{ height: 'auto' }}>
    <Link to={`/products/${category.slug}/${toSlug(name)}`} style={{ textDecoration: 'none' }}>
      <Card style={{ position: 'relative', padding: 0, paddingBottom: 30, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <LazyImage src={imageUrl} style={{ flex: 1 }} />
        <Info style={{ flex: 1 }}>
          <Title>{ name }</Title>
          <Seller>{ seller }</Seller>
          <Location>{ location }</Location>
          <Price>Rp.{ price }</Price>
        </Info>
        <BuyButton>BUY</BuyButton>
      </Card>
    </Link>
  </ResponsiveItem>
);
