import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';

import store from './store';

const Heads = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Nendohouse</title>
    <link rel="canonical" href="http://nendohouse.com/" />
  </Helmet>
);

export default () => (
  <Provider store={store}>
    <div>
      <Heads />
      <h1>Welcome to NendoHouse</h1>
    </div>
  </Provider>
);
