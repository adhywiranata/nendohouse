import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';
import Header from './components/core/Header';

console.log(Header);

const Heads = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Nendohouse</title>
    <link rel="canonical" href="http://nendohouse.com/" />
  </Helmet>
);

class LazyHomePage extends React.Component {
  state = {
    Comp: null,
  };

  componentDidMount() {
    import('./containers/HomePage').then((Comp) => {
      const TheComp = Comp.default;
      this.setState({
        Comp: (<TheComp />),
      });
    });
  }

  render() {
    return (
      <div>{ this.state.Comp }</div>
    );
  }
}

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Heads />
        <Header />
        <Route exact path="/" component={() => <LazyHomePage load={'./containers/HomePage'} />} />
      </div>
    </BrowserRouter>
  </Provider>
);
