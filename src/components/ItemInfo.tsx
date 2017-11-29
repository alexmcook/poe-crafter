import * as React from 'react';
import * as _ from 'lodash';
import * as poe from 'poe-mod-descriptions';
import AffixModal from '../components/AffixModal';
import AffixSwitch from '../components/AffixSwitch';
import Item, { Rarity } from '../utils/item';
import {
  filterPrefix,
  filterSuffix,
  getSameType
} from '../utils/itemFunctions';

interface ItemInfoProps {
  item: Item;
  display: boolean;
  affixClickAdd: (id: string) => { type: string; payload: string };
  affixClickRemove: (id: string) => { type: string; payload: string };
}

interface ItemInfoState {
  windowWidth: number;
}

class ItemInfo extends React.Component<ItemInfoProps, ItemInfoState> {
  constructor(props: ItemInfoProps) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.handleResize());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.handleResize());
  }

  calcDPS(): { tdps?: number; pdps?: number; edps?: number } {
    if (!this.props.item.weapon) {
      return {};
    } else {
      let weapon = this.props.item.calcWeapon();
      let pdpsValue =
        (weapon.physMin + weapon.physMax) / 2 * parseFloat(weapon.aps);
      let pdps = Math.round(pdpsValue * 100) / 100;
      let fire =
        (weapon.fireMin ? weapon.fireMin : 0) +
        (weapon.fireMax ? weapon.fireMax : 0);
      let cold =
        (weapon.coldMin ? weapon.coldMin : 0) +
        (weapon.coldMax ? weapon.coldMax : 0);
      let light =
        (weapon.lightMin ? weapon.lightMin : 0) +
        (weapon.lightMax ? weapon.lightMax : 0);
      let edpsValue =
        (fire / 2 + cold / 2 + light / 2) * parseFloat(weapon.aps);
      let edps = Math.round(edpsValue * 100) / 100;
      let chaos =
        (weapon.chaosMin ? weapon.chaosMin : 0) +
        (weapon.chaosMax ? weapon.chaosMax : 0);
      let cdpsValue = chaos / 2 * parseFloat(weapon.aps);
      let cdps = Math.round(cdpsValue * 100) / 100;
      let tdps = Math.round((pdps + edps + cdps) * 100) / 100;
      return { tdps: tdps, pdps: pdps, edps: edps };
    }
  }

  getColor(type: string, value?: number): string {
    if (value) {
      let max;
      switch (type) {
        case 'pdps':
          max = this.props.item.category === 'One Handed Weapon' ? 450 : 700;
          break;
        case 'edps':
          max = this.props.item.category === 'One Handed Weapon' ? 350 : 500;
          break;
        default:
          max = 500;
          break;
      }
      let percentage = Math.round((value / max > 1 ? 1 : value / max) * 180);
      return 'hsl(' + percentage + ', 75%, 50%';
    } else {
      return 'white';
    }
  }

  getPrefixes(): JSX.Element[] {
    const prefixes = filterSuffix(this.props.item.mods);
    return _.reduce(
      prefixes,
      (result: JSX.Element[], mod) => {
        let description = poe.getDescriptions([mod], true);
        let modText: JSX.Element[] = [];
        for (let i = 0; i < description.length; i++) {
          modText.push(
            <div key={'text' + i}>
              <span
                style={i > 0 ? { visibility: 'hidden' } : { color: '#8cdcdc' }}
              >
                [?]{' '}
              </span>
              <span
                style={i > 0 ? { visibility: 'hidden' } : { color: '#8cdcdc' }}
              >
                {' ' + mod.name + ' '}
              </span>
              {description[i].text}
            </div>
          );
        }
        result.push(
          <AffixSwitch
            modId={mod.id}
            modType={mod.modType}
            modText={modText}
            mods={getSameType(this.props.item.modPool, mod.modType)}
            affixClickAdd={id => this.props.affixClickAdd(id)}
            affixClickRemove={id => this.props.affixClickRemove(id)}
          />
        );
        return result;
      },
      []
    );
  }

  getSuffixes(): JSX.Element[] {
    const suffixes = filterPrefix(this.props.item.mods);
    return _.reduce(
      suffixes,
      (result: JSX.Element[], mod) => {
        let description = poe.getDescriptions([mod], true);
        let modText: JSX.Element[] = [];
        for (let i = 0; i < description.length; i++) {
          modText.push(
            <div key={'text' + i}>
              <span
                style={i > 0 ? { visibility: 'hidden' } : { color: '#8cdcdc' }}
              >
                [?]{' '}
              </span>
              <span
                style={i > 0 ? { visibility: 'hidden' } : { color: '#8cdcdc' }}
              >
                {' ' + mod.name + ' '}
              </span>
              {description[i].text}
            </div>
          );
        }
        result.push(
          <AffixSwitch
            modId={mod.id}
            modType={mod.modType}
            modText={modText}
            mods={getSameType(this.props.item.modPool, mod.modType)}
            affixClickAdd={id => this.props.affixClickAdd(id)}
            affixClickRemove={id => this.props.affixClickRemove(id)}
          />
        );
        return result;
      },
      []
    );
  }

  getDps(): JSX.Element[] {
    const weapon = this.calcDPS();
    return [(
      <div key="tdps">
        TDPS:{' '}
        <span style={{ color: this.getColor('pdps', weapon.tdps) }}>
          {weapon.tdps ? weapon.tdps : 'N/A'}
        </span>
      </div>
    ), (
      <div key="pdps">
        PDPS:{' '}
        <span style={{ color: this.getColor('pdps', weapon.pdps) }}>
          {weapon.pdps ? weapon.pdps : 'N/A'}
        </span>
      </div>
    ), (
      <div key="edps">
        EDPS:{' '}
        <span style={{ color: this.getColor('edps', weapon.edps) }}>
          {weapon.edps ? weapon.edps : 'N/A'}
        </span>
      </div>
    )];
  }

  render() {
    const style: {} = {
      position: this.state.windowWidth < 1700 ? 'relative' : 'absolute',
      left: this.state.windowWidth < 1700 ? '0px' : '10px',
      margin: this.state.windowWidth < 1700 ? '0 auto' : '',
      top: this.state.windowWidth < 1700 ? '0px' : '79.13px',
      padding: '0px 0px 0px 0px'
    };
    const prefixes = this.getPrefixes();
    const suffixes = this.getSuffixes();
    return (
      this.props.display && (
        <div className="item-info-box no-select" style={style}>
          {this.props.item.weapon ? (
            <div style={{ padding: '20px 20px 20px 20px' }}>
              <div className="text--normal">
                <span style={{ fontSize: '20pt', color: 'white' }}>DPS</span>
                {this.getDps()}
              </div>
            </div>
          ) : null}
          <div
            style={{
              padding: (this.props.item.weapon ? 0 : 20) + 'px 20px 20px 20px'
            }}
          >
            <div className="text--normal">
              <AffixModal
                prefixes={
                  this.props.item.rarity === Rarity.NORMAL
                    ? filterSuffix(this.props.item.modPool)
                    : filterSuffix(this.props.item.currentModPool)
                }
                affixClickAdd={(id: string) => this.props.affixClickAdd(id)}
              />
              <div>{prefixes.length > 0 ? prefixes : 'None'}</div>
            </div>
          </div>
          <div style={{ padding: '0px 20px 20px 20px' }}>
            <div className="text--normal">
              <AffixModal
                suffixes={
                  this.props.item.rarity === Rarity.NORMAL
                    ? filterPrefix(this.props.item.modPool)
                    : filterPrefix(this.props.item.currentModPool)
                }
                affixClickAdd={(id: string) => this.props.affixClickAdd(id)}
              />
              <div>{suffixes.length > 0 ? suffixes : 'None'}</div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default ItemInfo;
