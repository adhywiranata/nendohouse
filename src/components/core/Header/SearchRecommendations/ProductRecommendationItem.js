// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous';

import { colors } from '../../../../constants';
import { StrToSlug } from '../../../../helpers/productHelpers';

const ItemWrapper = glamorous.div({
  padding: '5px 20px',
  borderBottom: '1px solid rgba(0,0,0,0.05)',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontSize: '0.8em',
  color: colors.grey,
  transition: '0.3s',
  cursor: 'pointer',
  ':nth-last-child(1)': {
    borderBottom: 0,
  },
  ':hover': {
    backgroundColor: colors.darkerWhite,
    transition: '0.1s',
  },
});

type itemType = { imageUrl: string, name: string, price: string};

export default ({ imageUrl, name, price, category }: itemType) => (
  <Link to={`/products/${category.slug}/${StrToSlug(name)}`} style={{ textDecoration: 'none' }}>
    <ItemWrapper>
      <img
        src={imageUrl}
        height="50px"
        width="50px"
        alt="wow"
        style={{ objectFit: 'cover' }}
      />
      <p style={{ color: colors.orange, flex: 1, textAlign: 'center' }}>{ name }</p>
      <p style={{ flex: 1, textAlign: 'center' }}>Nendoroid</p>
      <p style={{ opacity: 0.5, flex: 1, textAlign: 'right' }}>approx. { price }</p>
    </ItemWrapper>
  </Link>
);
