import React from 'react';
import { colors, fontSizeScale, fontBoldScale } from '../../../constants';

import Button from '../../../components/core/reusables/Button';
import TextInput from '../../../components/core/reusables/TextInput';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', width: '70%', padding: 0 }}>
    <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid rgba(0,0,0,0.1)', padding: 10 }}>
      <div style={{ flex: 1 }}>
        <img
          alt="wow"
          src="http://images.goodsmile.info/cgm/images/product/20170526/6467/45602/large/f09416643e5fb327c6de0e98cadbf025.jpg"
          width="230px"
          height="300px"
        />
      </div>
      <div style={{ padding: '0px 30px', display: 'flex', flexDirection: 'column' }}>
        <h2>Nendoroid Izumi Sagiri</h2>
        <p style={{ fontSize: fontSizeScale.small, color: colors.grey }}>
          {
            `Izumi Sagiri is a character from Eromanga sensei.
            Izumi Sagiri is a little sister of Masamune, a seasoned light-novel writer.
            While caring for what's left of his family, Masamune earns a living as a published light novel author with one small problem: he's never actually met his acclaimed illustrator, Eromanga-sensei, infamous for drawing the most lewd erotica. Through an embarrassing chain of events, he learns that his very own little sister was his partner the whole time!
            `
          }
        </p>
        <span style={{
          fontSize: fontSizeScale.extraLarge,
          color: colors.orange,
          fontWeight: fontBoldScale.normal }}
        >
          {'Rp. 550.000'}
        </span>
        <span>Stok: 50</span>
        <div>
          <Button>+</Button>
          <TextInput type="text" />
          <Button>-</Button>
        </div>
        <div>
          <Button>Buy Now</Button>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
    <div>
      tabbed contents
    </div>
  </div>
);
