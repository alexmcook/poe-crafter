import * as React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import Mod from '../utils/mod';
import * as _ from 'lodash';
import * as poe from 'poe-mod-descriptions';

interface AffixSwitchProps {
  modId: string;
  modType: string;
  modText: JSX.Element[];
  mods: Mod[];
  affixClickAdd: (id: string) => { type: string; payload: string };
  affixClickRemove: (id: string) => { type: string; payload: string };
}

interface AffixSwitchState {
  open: boolean;
}

class AffixSwitch extends React.Component<AffixSwitchProps, AffixSwitchState> {
  constructor(props: AffixSwitchProps) {
    super(props);
    this.state = { open: false };
  }

  getModText(mods: Mod[]): JSX.Element[] {
    if (!mods) {
      return [];
    }
    let modTexts: {
      text: string;
      name: string;
      id: string;
      level: number;
    }[] = [];
    _.each(mods, mod => {
      let description = poe.getDescriptions([mod], true);
      let texts: string[] = [];
      _.each(description, text => {
        texts.push(text.text);
      });
      modTexts.push({
        text: texts.join(' / '),
        name: mod.name,
        id: mod.id,
        level: mod.level
      });
    });
    return _.reduce(
      modTexts,
      (result: JSX.Element[], text, index) => {
        if (index > 0) {
          result.push(<br key={'br' + index} />);
        }
        result.push(
          <span
            key={'text' + index}
            className="affix-modal-text no-select"
            onClick={
              text.id === this.props.modId
                ? undefined
                : () => this.switchAffix(this.props.modId, text.id)
            }
            style={text.id === this.props.modId ? { color: 'red' } : {}}
          >
            iLvl {text.level}: {text.text} ({text.name})
          </span>
        );
        return result;
      },
      []
    );
  }

  removeAffix(id: string) {
    this.props.affixClickRemove(id);
    this.close();
  }

  switchAffix(current: string, next: string) {
    this.props.affixClickRemove(current);
    this.props.affixClickAdd(next);
    this.close();
  }

  open() {
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    const trigger = (
      <span
        className="item-info-affix"
        style={{ display: 'table' }}
        onClick={() => this.open()}
      >
        {this.props.modText}
      </span>
    );
    return (
      <Modal
        open={this.state.open}
        trigger={trigger}
        dimmer="blurring"
        onClose={() => this.close()}
      >
        <Modal.Header>
          <span className="affix-modal-text--title no-select">
            {this.props.modType}
          </span>
        </Modal.Header>
        <Modal.Content>{this.getModText(this.props.mods)}</Modal.Content>
        <Modal.Actions>
          <div
            className="drop-shadow--btn"
            style={{
              display: 'inline-block',
              borderRadius: '5px',
              marginRight: '10px'
            }}
          >
            <Button
              onClick={() => this.removeAffix(this.props.modId)}
              negative={true}
              style={{ marginRight: '0px' }}
            >
              Remove
            </Button>
          </div>
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

export default AffixSwitch;
