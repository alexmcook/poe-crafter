import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

import Item from './utils/item';
import * as basesJSON from './data/bases.json';

const initialState = { item: new Item(basesJSON[10]) };

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
