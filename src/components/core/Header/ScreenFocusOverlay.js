import React from 'react';
import glamorous from 'glamorous';

const Div = glamorous.div({
  position: 'fixed',
  zIndex: 997,
  backgroundColor: 'rgba(0,0,0,.7)',
  width: '100%',
  height: '100vh',
});

export default () => (
  <Div />
);
