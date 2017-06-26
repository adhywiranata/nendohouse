import glamorous from 'glamorous';
import { colors, fontSizeScale } from '../../../constants';

export default glamorous.input({
  padding: 10,
  border: '1px solid rgba(0,0,0, .1)',
  fontSize: fontSizeScale.small,
  outline: 'none',
  color: colors.grey,
  '&:hover': {
    border: '1px solid rgba(0,0,0, .2)',
  },
  '&:focus': {
    border: '1px solid rgba(0,0,0, .3)',
  },
});
