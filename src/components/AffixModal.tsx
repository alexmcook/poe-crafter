import * as React from 'react';
import { Modal, Accordion, Icon, Button } from 'semantic-ui-react';
import Mod from '../utils/mod';
import { getWeight } from '../utils/itemFunctions';
import * as _ from 'lodash';
import * as poe from 'poe-mod-descriptions';

interface AffixModalProps {
  prefixes?: Mod[];
  suffixes?: Mod[];
  currentModPool: Mod[];
  modPool: Mod[];
  tags: string[];
  affixClickAdd: (id: string) => { type: string; payload: string };
}

interface AffixModalState {
  open: boolean;
  active: number[];
}

class AffixModal extends React.Component<AffixModalProps, AffixModalState> {
  constructor(props: AffixModalProps) {
    super(props);
    this.state = { open: false, active: [] };
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
        let modPool =
          this.props.currentModPool.length > 0
            ? this.props.currentModPool
            : this.props.modPool;
        let totalWeight = _.reduce(
          modPool,
          (total, mod) => {
            total += getWeight(mod, this.props.tags);
            return total;
          },
          0
        );
        let currentMods = this.props.prefixes
          ? this.props.prefixes
          : this.props.suffixes;
        let currentMod = _.find(currentMods, mod => {
          return mod.id === text.id;
        });
        let spawnChance = 0;
        if (currentMod) {
          spawnChance = Math.round((getWeight(currentMod, this.props.tags) / totalWeight * 100) * 100) / 100;
        } else {
          throw new Error('No mod found for ' + text.id);
        }
        result.push(
          <span
            key={'text' + index}
            className="affix-modal-text no-select"
            onClick={() => this.handleAffixClick(index, text.id)}
          >
            [{spawnChance}%] iLvl {text.level}: {text.text} ({text.name})
          </span>
        );
        return result;
      },
      []
    );
  }

  getAccordion(): JSX.Element[] | JSX.Element {
    let mods = this.props.prefixes ? this.props.prefixes : this.props.suffixes;
    if (!mods || mods.length === 0) {
      return <span className="affix-modal-text--none no-select">None</span>;
    }
    let groups = _.groupBy(mods, 'modType');
    let keys = Object.keys(groups);
    return _.reduce(
      groups,
      (result: JSX.Element[], group, key) => {
        result.push(
          <Accordion.Title
            className="affix-modal-title-box"
            key={'title' + key}
            active={this.state.active.indexOf(keys.indexOf(key)) >= 0}
            onClick={() => this.handleTitleClick(keys.indexOf(key))}
            style={
              this.state.active.indexOf(keys.indexOf(key)) >= 0
                ? { textShadow: '0 0 1px black' }
                : {}
            }
          >
            <Icon name="dropdown" />
            <span className="affix-modal-text--title no-select">{key}</span>
          </Accordion.Title>
        );
        result.push(
          <Accordion.Content
            className="no-select"
            key={'content' + key}
            active={this.state.active.indexOf(keys.indexOf(key)) >= 0}
          >
            {this.getModText(group)}
          </Accordion.Content>
        );
        return result;
      },
      []
    );
  }

  handleTitleClick(index: number) {
    if (this.state.active.indexOf(index) < 0) {
      let next = this.state.active.slice();
      next.push(index);
      this.setState({ active: next });
    } else {
      let next = this.state.active.slice();
      next.splice(next.indexOf(index), 1);
      this.setState({ active: next });
    }
  }

  handleAffixClick(index: number, id: string) {
    this.props.affixClickAdd(id);
    this.setState({ open: false, active: [] });
  }

  open() {
    // Fix for multiple modals causing the scrollbar to be removed if they do not need it
    document.body.className += 'scrolling';
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false, active: [] });
  }

  render() {
    const trigger = (
      <span className="item-info-affix--header" onClick={() => this.open()}>
        {this.props.prefixes ? 'Prefixes' : 'Suffixes'}
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
            Available {this.props.prefixes ? 'Prefixes' : 'Suffixes'}
          </span>
        </Modal.Header>
        <Modal.Content>
          <Accordion>{this.getAccordion()}</Accordion>
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

export default AffixModal;
