import * as React from 'react';
import ItemContainer from './containers/ItemContainer';
import ButtonContainer from './containers/ButtonContainer';
import './css/style.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <ItemContainer />
        <ButtonContainer />
      </div>
    );
  }
}

export default App;
