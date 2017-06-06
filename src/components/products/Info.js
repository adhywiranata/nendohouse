import glamorous from 'glamorous';
import { colors } from '../../constants';

export const Info = glamorous.div({
  padding: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Title = glamorous.span({
  color: colors.orange,
  fontSize: 16,
  fontWeight: 'bold',
});

export const Seller = glamorous.span({
  color: colors.darkerGrey,
  fontSize: 14,
});

export const Location = glamorous.span({
  color: colors.grey,
  fontSize: 14,
});

export const Price = glamorous.span({
  color: colors.orange,
  fontSize: 18,
  fontWeight: 'bold',
});
