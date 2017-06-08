import React from 'react';
import glamorous from 'glamorous';
import { colors } from '../../../constants';

const ItemWrapper = glamorous.div({
  padding: '2px 20px',
  borderBottom: '1px solid rgba(0,0,0,0.05)',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontSize: '0.8em',
  color: colors.grey,
  cursor: 'pointer',
  ':nth-last-child(1)': {
    borderBottom: 0,
  },
  ':hover': {
    backgroundColor: colors.darkerWhite,
  },
});

export default () => (
  <ItemWrapper>
    <img
      src="http://images.goodsmile.info/cgm/images/product/20170526/6467/45602/large/f09416643e5fb327c6de0e98cadbf025.jpg"
      height="40px"
      width="40px"
      alt="wow"
      style={{ objectFit: 'cover' }}
    />
    <p style={{ color: colors.orange }}>Izumi Sagiri</p>
    <p>Nendoroid</p>
    <p style={{ opacity: 0.5 }}>approx. Rp.50.000</p>
  </ItemWrapper>
);