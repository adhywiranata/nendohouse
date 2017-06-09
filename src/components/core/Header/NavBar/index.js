import React from 'react';
import glamorous from 'glamorous';
import { colors } from '../../../../constants';

const Nav = glamorous.nav({
  color: colors.white,
  padding: 5,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const BorderedButton = glamorous.a({
  backgroundColor: 'transparent',
  padding: '10px 20px',
  color: colors.white,
  border: '1px solid rgba(255,255,255, .8)',
  borderRadius: 4,
  fontSize: 14,
  textDecoration: 'none',
  outline: 'none',
});

const Button = glamorous.a({
  backgroundColor: 'transparent',
  padding: '10px 20px',
  color: colors.white,
  borderRadius: 4,
  fontSize: 14,
  textDecoration: 'none',
  outline: 'none',
});

export default () => (
  <Nav>
    <Button href="/">Register</Button>
    <BorderedButton href="/">Login</BorderedButton>
  </Nav>
);
