import glamorous from 'glamorous';

export default glamorous.div({
  paddingLeft: 100,
  paddingRight: 100,
  '@media(max-width: 1024px)': {
    paddingLeft: 60,
    paddingRight: 60,
  },
  '@media(max-width: 768px)': {
    paddingLeft: 50,
    paddingRight: 50,
  },
  '@media(max-width: 480px)': {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
