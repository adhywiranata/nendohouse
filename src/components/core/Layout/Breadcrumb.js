import React from 'react';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous';

import { colors } from '../../../constants';

const Wrapper = glamorous.div({
  padding: 5,
  color: colors.grey,
});

const Ul = glamorous.ul({
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
});

const Li = glamorous.li({
  listStyleType: 'none',
  padding: 3,
  '& a': {
    textDecoration: 'none',
    fontSize: '0.8em',
  },
  '& span': {
    fontSize: '0.8em',
  },
  '&::before': {
    content: '">"',
    fontSize: '0.7em',
    opacity: 0.5,
    marginRight: 5,
    verticalAlign: 'middle',
  },
  '&:nth-child(1)': {
    '&::before': {
      content: '""',
    },
  },
});

const wordToCapital = word => word[0].toUpperCase() + word.slice(1, word.length);
const capitalize = sentence => sentence.split(' ').map(word => wordToCapital(word)).join(' ');

export default ({ category, title }) => (
  <Wrapper>
    <Ul>
      <Li>
        <Link to="/" style={{ color: colors.grey }}>Home</Link>
      </Li>
      <Li>
        <Link to={`/${category}`} style={{ color: colors.grey }}>{ category }</Link>
      </Li>
      <Li>
        <span style={{ color: colors.black }}>{ capitalize(title.split('-').join(' ')) }</span>
      </Li>
    </Ul>
  </Wrapper>
);
