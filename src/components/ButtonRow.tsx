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
        <div className="drop-shadow--btn" style={{ marginTop: '10px', borderRadius: '5px' }}>
          <Button.Group size="large" style={{ borderRadius: '5px' }}>
            <Button
              style={{ fontFamily: 'Fontin-SmallCaps', borderRadius: '5px 0 0 5px' }}
              onClick={() => this.props.changeTab('Currency')}
            >
              currency
            </Button>
            <Button
              style={{ fontFamily: 'Fontin-SmallCaps' }}
              onClick={() => this.props.changeTab('Essence')}
            >
              essence
            </Button>
            <Button
              style={{ fontFamily: 'Fontin-SmallCaps' }}
              onClick={() => this.props.changeTab('Crafting')}
            >
              crafting
            </Button>
            <OptionsContainer />
          </Button.Group>
        </div>
      </Grid.Row>
    );
  }
}

export default ButtonRow;
