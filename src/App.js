import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LazyComponent, lazify } from 'react-code-split-component';

import store from './store';
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

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD1W_bujrLv5GR3WAP9lh6K1x5JDliZENg',
      authDomain: 'nendohouse.firebaseapp.com',
      databaseURL: 'https://nendohouse.firebaseio.com',
      projectId: 'nendohouse',
      storageBucket: 'nendohouse.appspot.com',
      messagingSenderId: '1028604632366',
    };
    firebase.initializeApp(config);
  }

  componentDidMount() {
    const dat = firebase.database().ref('products').once('value').then((snapshot) => {
      console.log(snapshot.val());
    });
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Heads />
            <Header />
            <Switch>
              <Route exact path="/" component={() => <LazyComponent load={() => import('./containers/HomePage')} />} />
              <Route path="/search" component={() => <LazyComponent load={() => import('./containers/SearchResultPage')} />} />
              <Route path="/:category/:title" component={() => <LazyComponent load={() => import('./containers/DetailPage')} />} />
              <Route component={lazify(import('./containers/Page404'))} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
