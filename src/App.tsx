import * as React from 'react';
import ItemBox from './components/ItemBox';
import * as bases from './data/bases.json';
import Item from './utils/item';
import './css/style.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <ItemBox item={new Item(bases[333])} />
      </div>
    );
  }
}

export default App;
