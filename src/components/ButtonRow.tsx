import * as React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import OptionsContainer from '../containers/OptionsContainer';

interface ButtonRowProps {
  changeTab: (value: string) => { type: string; payload: string };
}

class ButtonRow extends React.Component<ButtonRowProps> {
  render() {
    return (
      <Grid.Row centered={true}>
        <Button.Group size="large">
          <Button onClick={() => this.props.changeTab('Currency')}>
            Currency
          </Button>
          <Button onClick={() => this.props.changeTab('Essence')}>
            Essence
          </Button>
          <Button onClick={() => this.props.changeTab('Crafting')}>
            Crafting
          </Button>
          <OptionsContainer />
        </Button.Group>
      </Grid.Row>
    );
  }
}

export default ButtonRow;
