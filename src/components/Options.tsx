import * as React from 'react';
import { Grid, Button, Modal, Icon } from 'semantic-ui-react';
import BaseSelectorContainer from '../containers/BaseSelectorContainer';

interface OptionsProps {
  forceShiftState: boolean;
  anchorItemBoxState: boolean;
  setForceShift: (value: boolean) => { type: string; payload: boolean };
  setAnchorItemBox: (value: boolean) => { type: string; payload: boolean };
}

interface OptionsState {
  open: boolean;
}

class Options extends React.Component<OptionsProps, OptionsState> {
  constructor(props: OptionsProps) {
    super(props);
    this.state = {
      open: false
    };
  }

  open() {
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
  }

  toggle(option: string) {
    switch (option) {
      case 'forceShift':
        this.props.setForceShift(!this.props.forceShiftState);
        break;
      case 'anchorItemBox':
        this.props.setAnchorItemBox(!this.props.anchorItemBoxState);
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Modal
        open={this.state.open}
        trigger={<Button onClick={() => this.open()}>Options</Button>}
        size="tiny"
        onClose={() => this.close()}
      >
        <Modal.Header>Options</Modal.Header>
        <Modal.Content className="no-select">
          <Grid padded="horizontally">
            <Grid.Row columns={16}>
              <Grid.Column width={16}>
                <p style={{ fontSize: '12pt' }}>Base Selection</p>
                <BaseSelectorContainer />
                <br />
              </Grid.Column>
              <Grid.Column width={16}>
                <span
                  onClick={() => this.toggle('forceShift')}
                  className="no-select cursor--pointer"
                  style={{ fontSize: '12pt' }}
                >
                  <Icon
                    name={
                      this.props.forceShiftState ? 'toggle on' : 'toggle off'
                    }
                    fitted={true}
                    onClick={() => this.toggle('forceShift')}
                    className="no-select cursor--pointer"
                    style={{
                      fontSize: '17pt',
                      verticalAlign: 'top',
                      lineHeight: 1.1
                    }}
                  />
                  {' Force use shift key'}
                </span>
              </Grid.Column>
              <Grid.Column width={16}>
                <span
                  onClick={() => this.toggle('anchorItemBox')}
                  className="no-select cursor--pointer"
                  style={{ fontSize: '12pt' }}
                >
                  <Icon
                    name={
                      this.props.anchorItemBoxState ? 'toggle on' : 'toggle off'
                    }
                    fitted={true}
                    onClick={() => this.toggle('anchorItemBox')}
                    className="no-select cursor--pointer"
                    style={{
                      fontSize: '17pt',
                      verticalAlign: 'top',
                      lineHeight: 1.1
                    }}
                  />
                  {' Anchor item display window'}
                </span>
              </Grid.Column>
              <Grid.Column width={16} floated={'right'}>
                <br />
                <Button color="red">Reset</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => this.close()}>Close</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default Options;
