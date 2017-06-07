import glamorous from 'glamorous';
import { colors } from '../../../constants';

export default glamorous.header({
  backgroundColor: colors.orange,
  color: colors.white,
  margin: 0,
  padding: 10,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  zIndex: '+999',
  width: '99%',
  top: 0,
  left: 0,
});
