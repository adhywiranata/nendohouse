import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { LazyComponent, lazify } from 'react-code-split-component';
import createHistory from 'history/createBrowserHistory';

import store from './configureStore';
import Header from './components/core/Header';

const history = createHistory();

const Heads = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Nendohouse</title>
    <link rel="canonical" href="http://nendohouse.com/" />
  </Helmet>
);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Heads />
        <Header />
        <Switch>
          <Route exact path="/" component={props => <LazyComponent load={() => import('./containers/HomePage')} {...props} />} />
          <Route path="/search" component={props => <LazyComponent load={() => import('./containers/SearchResultPage')} {...props} />} />
          <Route exact path="/products/:category" component={props => <LazyComponent load={() => import('./containers/CategoryProductPage')} {...props} />} />
          <Route path="/products/:category/:title" component={props => <LazyComponent load={() => import('./containers/DetailPage')} {...props} />} />
          <Route component={lazify(import('./containers/Page404'))} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
