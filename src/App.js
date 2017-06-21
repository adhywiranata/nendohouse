import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LazyComponent, lazify } from 'react-code-split-component';

import store from './configureStore';
import Header from './components/core/Header';

const Heads = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Nendohouse</title>
    <link rel="canonical" href="http://nendohouse.com/" />
  </Helmet>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: {},
    };
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Heads />
            <Header />
            <Switch>
              <Route exact path="/" component={props => <LazyComponent load={() => import('./containers/HomePage')} {...props} />} />
              <Route path="/search" component={props => <LazyComponent load={() => import('./containers/SearchResultPage')} {...props} />} />
              <Route path="/:category/:title" component={props => <LazyComponent load={() => import('./containers/DetailPage')} {...props} />} />
              <Route component={lazify(import('./containers/Page404'))} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
