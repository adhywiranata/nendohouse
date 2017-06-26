import React from 'react';

import { colors, fontSizeScale, fontBoldScale } from '../../../constants';
import Button from '../../../components/core/reusables/Button';
import TextInput from '../../../components/core/reusables/TextInput';

export default () => (
  <div style={{ padding: 20, display: 'flex', flexDirection: 'column' }}>
    <div style={{ background: colors.darkerWhite, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '0 10px 10px 10px' }}>
      <p>Seller Information</p>
      <span style={{
        color: colors.orange,
        fontSize: fontSizeScale.small,
        fontWeight: fontBoldScale.bold,
      }}
      >
        Nur Cahyono Harjo
      </span>
      <span style={{ fontSize: fontSizeScale.small, color: colors.grey, marginTop: 5 }}>
        Nendohouse Top Seller
      </span>
    </div>
    <div>
      <Button>+</Button>
      <TextInput type="text" value="1" style={{ textAlign: 'center' }} />
      <Button>-</Button>
    </div>
    <Button>Add to My Wishlist</Button>
    <Button>Add to Cart</Button>
  </div>
);
