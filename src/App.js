import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LazyComponent } from 'react-code-split-component';

import store from './store';
import Header from './components/core/Header';

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
          <Route component={() => <LazyComponent load={() => import('./containers/Page404')} />} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);
