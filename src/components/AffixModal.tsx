import * as React from 'react';
import { Modal, Accordion, Icon } from 'semantic-ui-react';
import Mod from '../utils/mod';
import * as _ from 'lodash';
import * as poe from 'poe-mod-descriptions';

interface AffixModalProps {
  prefixes?: Mod[];
  suffixes?: Mod[];
  affixClickAdd: (id: string) => { type: string; payload: string };
}

interface AffixModalState {
  active: number[];
}

class AffixModal extends React.Component<AffixModalProps, AffixModalState> {
  constructor(props: AffixModalProps) {
    super(props);
    this.state = { active: [] };
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
            className="affix-modal-text"
            onClick={() => this.handleAffixClick(index, text.id)}
          >
            iLvl {text.level}: {text.text} ({text.name})
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
      return <span>None</span>;
    }
    let groups = _.groupBy(mods, 'modType');
    let keys = Object.keys(groups);
    return _.reduce(
      groups,
      (result: JSX.Element[], group, key) => {
        result.push(
          <Accordion.Title
            key={'title' + key}
            active={this.state.active.indexOf(keys.indexOf(key)) >= 0}
            onClick={() => this.handleTitleClick(keys.indexOf(key))}
          >
            <Icon name="dropdown" />
            <span className="affix-modal-text--title">{key}</span>
          </Accordion.Title>
        );
        result.push(
          <Accordion.Content
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
    let next = this.state.active.slice();
    next.splice(next.indexOf(index), 1);
    this.setState({ active: next });
  }

  render() {
    const trigger = (
      <span className="item-info-affix--header">
        {this.props.prefixes ? 'Prefixes' : 'Suffixes'}
      </span>
    );
    return (
      <Modal trigger={trigger} dimmer="blurring">
        <Modal.Content>
          <Accordion>{this.getAccordion()}</Accordion>
        </Modal.Content>
      </Modal>
    );
  }
}

export default AffixModal;
