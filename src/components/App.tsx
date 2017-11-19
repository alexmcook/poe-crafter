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
  keyListener: (key: string) => { type: string; payload: string };
}

class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  componentWillMount() {
    window.addEventListener('keyup', (e: KeyboardEvent) => {
      this.props.keyListener(e.key);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', (e: KeyboardEvent) => {
      this.props.keyListener(e.key);
    });
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
