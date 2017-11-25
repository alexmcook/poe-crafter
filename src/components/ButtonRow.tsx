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
        <Button.Group size="large" style={{ marginTop: '10px' }}>
          <Button style={{ fontFamily: 'Fontin-SmallCaps' }} onClick={() => this.props.changeTab('Currency')}>
            currency
          </Button>
          <Button style={{ fontFamily: 'Fontin-SmallCaps' }} onClick={() => this.props.changeTab('Essence')}>
            essence
          </Button>
          <Button style={{ fontFamily: 'Fontin-SmallCaps' }} onClick={() => this.props.changeTab('Crafting')}>
            crafting
          </Button>
          <OptionsContainer />
        </Button.Group>
      </Grid.Row>
    );
  }
}

export default ButtonRow;
