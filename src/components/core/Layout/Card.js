import glamorous from 'glamorous';
import { colors } from '../../../constants';

export default glamorous.div({
  backgroundColor: colors.white,
  border: '1px solid rgba(0,0,0,.1)',
  borderRadius: 5,
  padding: 8,
  margin: 10,
  transition: '0.5s',
  cursor: 'pointer',
  '& img': {
    opacity: 0.8,
    webkitFilter: 'grayscale(70%)',
    filter: 'grayscale(70%)',
    transition: '0.5s',
  },
  ':hover': {
    boxShadow: '0px 1px 1px 1px rgba(0,0,0,.05)',
    transition: '0.5s',
    border: '1px solid rgba(0,0,0,.2)',
    '& img': {
      opacity: 1,
      WebkitFilter: 'grayscale(0%)',
      filter: 'grayscale(0%)',
      transition: '0.5s',
    },
  },
});
