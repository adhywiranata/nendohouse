import React from 'react';
import glamorous from 'glamorous';

import { colors } from '../../../constants';

const Wrapper = glamorous.div({
  background: 'rgba(0,0,0, .5)',
  color: colors.white,
  padding: '5px 10px',
  fontSize: '0.8em',
  width: '100%',
  height: 'auto',
  bottom: 0,
  position: 'fixed',
  textAlign: 'center',
});

export default () => (
  <Wrapper>
    <strong>YOU ARE NOW OFFLINE. </strong>
    <p>You can see products, but prices may be different.</p>
  </Wrapper>
);
