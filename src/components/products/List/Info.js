import glamorous from 'glamorous';
import { colors } from '../../../constants';

export const Info = glamorous.div({
  padding: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Title = glamorous.span({
  color: colors.orange,
  fontSize: 18,
  margin: 10,
});

export const Seller = glamorous.span({
  color: colors.darkerGrey,
  fontSize: 12,
  margin: 3,
});

export const Location = glamorous.span({
  color: colors.grey,
  fontSize: 12,
  margin: 3,
});

export const Price = glamorous.span({
  color: colors.orange,
  fontSize: 18,
  margin: 10,
});
