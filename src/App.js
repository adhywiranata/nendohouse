import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';
import HomePage from './containers/HomePage';

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
        <Route exact path="/" component={HomePage} />
      </div>
    </BrowserRouter>
  </Provider>
);
