import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

import Item from './utils/item';
import * as bases from './data/bases.json';

let item = new Item(bases[10]);

const initialState = { item: item };

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
