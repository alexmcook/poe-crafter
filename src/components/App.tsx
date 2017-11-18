import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import BaseSelectorContainer from '../containers/BaseSelectorContainer';
import CurrencyTabContainer from '../containers/CurrencyTabContainer';
import EssenceTabContainer from '../containers/EssenceTabContainer';
import CurrencyCursorContainer from '../containers/CurrencyCursorContainer';
import CraftingTabContainer from '../containers/CraftingTabContainer';
import '../css/style.css';

interface AppProps {
  currentTab: string;
}

class App extends React.Component<AppProps> {  
  constructor(props: AppProps) {
    super(props);
  }

  getTab(currentTab: string) {
    switch (currentTab) {
      case 'Currency':
        return <CurrencyTabContainer />;
      case 'Essence':
        return <EssenceTabContainer />;
      case 'Crafting':
        return <CraftingTabContainer />;
      default:
        return null;
    }
  }
  render() {
    return (
      <Grid columns={16} centered={true}>
        <CurrencyCursorContainer />
        <BaseSelectorContainer />
        {this.getTab(this.props.currentTab)}
      </Grid>
    );
  }
}

export default App;
