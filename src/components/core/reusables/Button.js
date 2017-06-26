import glamorous from 'glamorous';
import { colors, fontBoldScale } from '../../../constants';

export default glamorous.button({
  fontSize: '1em',
  outline: 'none',
  cursor: 'pointer',
  margin: 5,
  backgroundColor: colors.orange,
  color: colors.white,
  padding: '10px 15px',
  border: 0,
  borderRadius: 5,
  width: 'auto',
  fontWeight: fontBoldScale.normal,
  '&:hover': {
    backgroundColor: colors.darkerOrange,
  },
});
