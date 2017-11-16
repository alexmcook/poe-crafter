import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import BaseSelectorContainer from './containers/BaseSelectorContainer';
import CurrencyTabContainer from './containers/CurrencyTabContainer';
import EssenceTabContainer from './containers/EssenceTabContainer';
import CurrencyCursorContainer from './containers/CurrencyCursorContainer';
import CraftingTabContainer from './containers/CraftingTabContainer';
import './css/style.css';

class App extends React.Component {
  render() {
    return (
      <Grid columns={16} centered={true}>
        <CurrencyCursorContainer />
        <BaseSelectorContainer />
        <CurrencyTabContainer />
        <EssenceTabContainer />
        <CraftingTabContainer />
      </Grid>
    );
  }
}

export default App;