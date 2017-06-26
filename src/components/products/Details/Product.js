import React from 'react';
import glamorous from 'glamorous';

import { colors, fontSizeScale, fontBoldScale } from '../../../constants';

const ProductWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  width: '70%',
  padding: 0,
  '@media(max-width: 768px)': {
    width: '100%',
  },
});

const Product = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  border: '1px solid rgba(0,0,0,0.1)',
  padding: 10,
  '@media(max-width: 768px)': {
    flexDirection: 'column',
    textAlign: 'center',
  },
});

export default () => (
  <ProductWrapper>
    <Product>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img
          alt="wow"
          src="http://images.goodsmile.info/cgm/images/product/20170526/6467/45602/large/f09416643e5fb327c6de0e98cadbf025.jpg"
          width="230px"
          height="300px"
        />
      </div>
      <div style={{ padding: '0px 30px', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ paddingBottom: 10, borderBottom: '1px solid rgba(0,0,0, .1)' }}>
          Nendoroid Izumi Sagiri
        </h2>
        <span style={{
          fontSize: fontSizeScale.extraLarge,
          color: colors.orange,
          fontWeight: fontBoldScale.normal,
        }}
        >
          {'Rp. 550.000'}
        </span>
        <p style={{
          fontSize: fontSizeScale.small,
          color: colors.grey,
          paddingBottom: 10,
          borderBottom: '1px dashed rgba(0,0,0, .2)',
        }}
        >
          {
            `Izumi Sagiri is a character from Eromanga sensei.
            Izumi Sagiri is a little sister of Masamune, a seasoned light-novel writer.
            While caring for what's left of his family, Masamune earns a living as a published light novel author with one small problem: he's never actually met his acclaimed illustrator, Eromanga-sensei, infamous for drawing the most lewd erotica. Through an embarrassing chain of events, he learns that his very own little sister was his partner the whole time!
            `
          }
        </p>
      </div>
    </Product>
  </ProductWrapper>
);
