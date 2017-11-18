import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppContainer from './containers/AppContainer';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';

const rootEl = document.getElementById('root');
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootEl
);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./containers/AppContainer', () => {
    const NextAppContainer = require('./containers/AppContainer').default;
    ReactDOM.render(
      <Provider store={store}>
        <NextAppContainer />
      </Provider>,
      rootEl
    );
  });
}