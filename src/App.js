import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LazyComponent } from 'react-code-split-component';

import store from './store';
import Header from './components/core/Header';

import Page404Lazy from './containers/Page404';

const Heads = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Nendohouse</title>
    <link rel="canonical" href="http://nendohouse.com/" />
  </Helmet>
);

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Heads />
        <Header />
        <Switch>
          <Route exact path="/" component={() => <LazyComponent load={() => import('./containers/HomePage')} />} />
          <Route path="/search" component={() => <LazyComponent load={() => import('./containers/SearchResultPage')} />} />
          <Route component={Page404Lazy} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);
