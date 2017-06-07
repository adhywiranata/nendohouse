import glamorous from 'glamorous';

export default glamorous.div({
  padding: 100,
  '@media(max-width: 1024px)': {
    padding: 60,
  },
  '@media(max-width: 768px)': {
    padding: 50,
  },
  '@media(max-width: 480px)': {
    padding: 20,
  },
});
