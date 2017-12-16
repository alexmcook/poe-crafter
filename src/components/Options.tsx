import * as React from 'react';
import { Grid, Button, Modal, Icon } from 'semantic-ui-react';
import BaseSelectorContainer from '../containers/BaseSelectorContainer';

interface OptionsProps {
  forceShiftState: boolean;
  anchorItemBoxState: boolean;
  displayItemInfoState: boolean;
  atlasType: string;
  setForceShift: (value: boolean) => { type: string; payload: boolean };
  setAnchorItemBox: (value: boolean) => { type: string; payload: boolean };
  setDisplayItemInfo: (value: boolean) => { type: string; payload: boolean };
  setAtlasType: (value: string) => { type: string; payload: string };
  reset: () => { type: string; payload: {} };
}

interface OptionsState {
  open: boolean;
  openNested: boolean;
}

class Options extends React.Component<OptionsProps, OptionsState> {
  constructor(props: OptionsProps) {
    super(props);
    this.state = {
      open: false,
      openNested: false
    };
  }

  open() {
    this.setState({ open: true });
  }

  openNested() {
    this.setState({ openNested: true });
  }

  close() {
    this.setState({ open: false, openNested: false });
  }

  closeNested() {
    this.setState({ openNested: false });
  }

  toggle(option: string) {
    switch (option) {
      case 'forceShift':
        this.props.setForceShift(!this.props.forceShiftState);
        break;
      case 'anchorItemBox':
        this.props.setAnchorItemBox(!this.props.anchorItemBoxState);
        break;
      case 'displayItemInfo':
        this.props.setDisplayItemInfo(!this.props.displayItemInfoState);
        break;
      default:
        break;
    }
  }

  render() {
    const resetBtn = (
      <div
        className="drop-shadow--btn"
        style={{
          display: 'inline-block',
          borderRadius: '5px',
          marginTop: '20px'
        }}
      >
        <Button
          color="red"
          onClick={() => this.openNested()}
          style={{ marginRight: '0px' }}
        >
          Reset
        </Button>
      </div>
    );
    const nestedModal = (
      <Modal
        open={this.state.openNested}
        trigger={resetBtn}
        size="mini"
        onClose={() => this.closeNested()}
      >
        <Modal.Header>Are you sure?</Modal.Header>
        <Modal.Content>
          <div
            className="drop-shadow--btn"
            style={{ display: 'inline-block', borderRadius: '5px' }}
          >
            <Button
              onClick={() => {
                this.props.reset();
                this.close();
              }}
              style={{ marginRight: '0px' }}
            >
              Yes
            </Button>
          </div>
          <div
            className="drop-shadow--btn"
            style={{
              display: 'inline-block',
              borderRadius: '5px',
              marginLeft: '15px'
            }}
          >
            <Button
              onClick={() => this.closeNested()}
              style={{ marginRight: '0px' }}
            >
              No
            </Button>
          </div>
        </Modal.Content>
      </Modal>
    );
    return (
      <Modal
        open={this.state.open}
        trigger={
          <Button
            style={{
              fontFamily: 'Fontin-SmallCaps',
              borderRadius: '0 5px 5px 0'
            }}
            onClick={() => this.open()}
          >
            options
          </Button>
        }
        size="tiny"
        onClose={() => this.close()}
      >
        <Modal.Header>Options</Modal.Header>
        <Modal.Content className="no-select">
          <Modal.Description>
            <Grid padded="horizontally">
              <Grid.Row columns={16}>
                <Grid.Column width={16}>
                  <p style={{ fontSize: '14pt', marginBottom: '5px' }}>
                    Base Selection
                  </p>
                  <BaseSelectorContainer />
                </Grid.Column>
                <Grid.Column width={16}>
                  <br />
                  <span
                    onClick={() =>
                      this.props.atlasType !== 'ELDER'
                        ? this.props.setAtlasType('ELDER')
                        : null
                    }
                    className="no-select"
                    style={{
                      fontSize: '12pt',
                      cursor: 'pointer',
                      marginTop: '5px'
                    }}
                  >
                    <Icon
                      name={
                        this.props.atlasType === 'ELDER'
                          ? 'selected radio'
                          : 'radio'
                      }
                    />
                    {'Elder'}
                  </span>
                  <span
                    onClick={() =>
                      this.props.atlasType !== 'SHAPER'
                        ? this.props.setAtlasType('SHAPER')
                        : null
                    }
                    className="no-select"
                    style={{
                      fontSize: '12pt',
                      cursor: 'pointer',
                      marginTop: '5px',
                      marginLeft: '10px'
                    }}
                  >
                    <Icon
                      name={
                        this.props.atlasType === 'SHAPER'
                          ? 'selected radio'
                          : 'radio'
                      }
                    />
                    {'Shaper'}
                  </span>
                  <span
                    onClick={() =>
                      this.props.atlasType !== 'NONE'
                        ? this.props.setAtlasType('NONE')
                        : null
                    }
                    className="no-select"
                    style={{
                      fontSize: '12pt',
                      cursor: 'pointer',
                      marginTop: '5px',
                      marginLeft: '10px'
                    }}
                  >
                    <Icon
                      name={
                        this.props.atlasType === 'NONE'
                          ? 'selected radio'
                          : 'radio'
                      }
                    />
                    {'None'}
                  </span>
                </Grid.Column>
                <Grid.Column width={16} style={{ marginTop: '5px' }}>
                  <p
                    style={{
                      fontSize: '14pt',
                      marginTop: '10px',
                      marginBottom: '5px',
                      marginLeft: '10px'
                    }}
                  >
                    Options
                  </p>
                  <span
                    onClick={() => this.toggle('forceShift')}
                    className="no-select"
                    style={{
                      fontSize: '12pt',
                      cursor: 'pointer',
                      marginTop: '5px'
                    }}
                  >
                    <Icon
                      name={
                        this.props.forceShiftState ? 'toggle on' : 'toggle off'
                      }
                      fitted={true}
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
                    className="no-select"
                    style={{
                      fontSize: '12pt',
                      cursor: 'pointer',
                      marginTop: '5px'
                    }}
                  >
                    <Icon
                      name={
                        this.props.anchorItemBoxState
                          ? 'toggle on'
                          : 'toggle off'
                      }
                      fitted={true}
                      style={{
                        fontSize: '17pt',
                        verticalAlign: 'top',
                        lineHeight: 1.1
                      }}
                    />
                    {' Anchor item display window'}
                  </span>
                </Grid.Column>
                <Grid.Column width={16}>
                  <span
                    onClick={() => this.toggle('displayItemInfo')}
                    className="no-select"
                    style={{
                      fontSize: '12pt',
                      cursor: 'pointer',
                      marginTop: '5px'
                    }}
                  >
                    <Icon
                      name={
                        this.props.displayItemInfoState
                          ? 'toggle on'
                          : 'toggle off'
                      }
                      fitted={true}
                      style={{
                        fontSize: '17pt',
                        verticalAlign: 'top',
                        lineHeight: 1.1
                      }}
                    />
                    {' Display detailed item info'}
                  </span>
                </Grid.Column>
                <Grid.Column width={16}>{nestedModal}</Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <div
            className="drop-shadow--btn"
            style={{ display: 'inline-block', borderRadius: '5px' }}
          >
            <Button onClick={() => this.close()} style={{ marginRight: '0px' }}>
              Close
            </Button>
          </div>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default Options;
