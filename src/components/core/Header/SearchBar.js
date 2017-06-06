import React from 'react';
import glamorous from 'glamorous';
import { colors } from '../../../constants';

const Bar = glamorous.div({
  backgroundColor: colors.white,
  padding: 5,
  borderRadius: 3,
})
const Search = glamorous.input({
  padding: 12,
  borderRadius: 3,
  border: 0,
  fontSize: 14,
  width: '40vw',
  backgroundColor: colors.white,
  color: colors.black,
  outline: 0,
});

const Button = glamorous.button({
  backgroundColor: colors.orange,
  padding: '10px 20px',
  color: colors.white,
  border: '1px solid rgba(255,255,255, .8)',
  borderRadius: 4,
  fontSize: 14,
  textDecoration: 'none',
  outline: 'none',
});

export default () => (
  <div>
    <Bar>
      <Search type="text" placeholder="Find your future waifus here..." />
      <Button>Search</Button>
    </Bar>
  </div>
);
