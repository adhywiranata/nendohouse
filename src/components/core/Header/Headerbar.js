import glamorous from 'glamorous';
import { colors } from '../../../constants';

export default glamorous.header({
  backgroundColor: colors.orange,
  color: colors.white,
  margin: 0,
  paddingTop: 18,
  paddingBottom: 18,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'fixed',
  zIndex: '+999',
  width: '100%',
  top: 0,
  left: 0,
});
