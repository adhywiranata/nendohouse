import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { LazyComponent, lazify } from 'react-code-split-component';
import createHistory from 'history/createBrowserHistory';

import store from './configureStore';
import HeaderWrapper from './containers/sections/HeaderWrapper';
import OfflineBanner from './components/core/Layout/OfflineBanner';

const history = createHistory();

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
      isOnline: true,
    };

    this.updateNetworkIndicator = this.updateNetworkIndicator.bind(this);
  }

  componentDidMount() {
    window.addEventListener('online', this.updateNetworkIndicator);
    window.addEventListener('offline', this.updateNetworkIndicator);
    this.updateNetworkIndicator();
  }

  updateNetworkIndicator() {
    this.setState({
      isOnline: window.navigator.onLine,
    });
  }

  render() {
    const { isOnline } = this.state;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Heads />
            <HeaderWrapper />
            <Switch>
              <Route exact path="/" component={props => <LazyComponent load={() => import('./containers/pages/HomePage')} {...props} />} />
              <Route path="/search" component={props => <LazyComponent load={() => import('./containers/pages/SearchResultPage')} {...props} />} />
              <Route exact path="/products" component={props => <LazyComponent load={() => import('./containers/pages/SearchResultPage')} {...props} />} />
              <Route exact path="/products/:category" component={props => <LazyComponent load={() => import('./containers/pages/CategoryProductPage')} {...props} />} />
              <Route path="/products/:category/:title" component={props => <LazyComponent load={() => import('./containers/pages/DetailPage')} {...props} />} />
              <Route component={lazify(import('./containers/pages/Page404'))} />
            </Switch>
            { !isOnline && <OfflineBanner /> }
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
