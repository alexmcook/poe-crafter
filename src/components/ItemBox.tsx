import * as React from 'react';
import Title from './Title';
import Defense from './Defense';
import Weapon from './Weapon';
import Requirements from './Requirements';
import Stat from './Stat';
import Separator from './Separator';
import Item from '../utils/item';
import { Grid } from 'semantic-ui-react';
import * as _ from 'lodash';
import * as poe from 'poe-mod-descriptions';

interface ItemBoxProps {
  item: Item;
}

class ItemBox extends React.Component<ItemBoxProps> {
  render() {
    let header: JSX.Element[] = [],
      weaponType: JSX.Element,
      weapon: JSX.Element,
      quality: JSX.Element,
      defense: JSX.Element,
      requirements: JSX.Element,
      implicit: JSX.Element,
      stats: JSX.Element[] = [],
      elements: {}[] = [],
      output: {}[] = [];

    if (this.props.item.weapon) {
      weaponType = (
        <div key="weaponType" className="text--descriptor">
          {this.props.item.type.replace('Thrusting ', '').replace(' Hand ', ' Handed ')}
        </div>
      );
      header.push(weaponType);
    }

    if (this.props.item.quality > 0) {
      quality = (
        <div key="quality" className="text--descriptor">
          Quality:{' '}
          <span className="text--magic">{this.props.item.quality}%</span>
        </div>
      );
      header.push(quality);
    }

    if (this.props.item.weapon) {
      weapon = (
        <Weapon
          key="weapon"
          weapon={this.props.item.calcWeapon()}
          quality={this.props.item.quality}
        />
      );
      header.push(weapon);
    }

    if (this.props.item.defense) {
      defense = (
        <Defense
          key="defense"
          defense={this.props.item.calcDefense()}
          quality={this.props.item.quality}
        />
      );
      header.push(defense);
    }

    if (header.length > 0) {
      elements.push(header);
    }

    if (
      this.props.item.requirement &&
      (this.props.item.requirement.level > 2 ||
        this.props.item.requirement.str > 14 ||
        this.props.item.requirement.dex > 14 ||
        this.props.item.requirement.int > 14 ||
        this.props.item.calcLevel() > 2)
    ) {
      requirements = (
        <Requirements
          key="requirement"
          requirement={this.props.item.requirement}
          level={this.props.item.calcLevel()}
        />
      );
      elements.push(requirements);
    }

    if (this.props.item.implicit) {
      implicit = (
        <Stat
          key="implicit"
          text={poe.getDescriptions([this.props.item.implicit])[0]}
        />
      );
      elements.push(implicit);
    }

    if (this.props.item.mods.length > 0) {
      let descriptions = poe.getDescriptions(this.props.item.mods);
      _.map(descriptions, (description, index) => {
        stats.push(<Stat key={index} text={description} />);
      });
      elements.push(stats);
    }

    function createSeparator(key: number, rarity: string) {
      return <Separator key={'separator' + key} rarity={rarity} />;
    }

    if (elements.length > 1) {
      output = _.reduce(
        elements,
        (result: {}[], element, index) => {
          if (result.length > 0) {
            result.push(createSeparator(index, this.props.item.rarity));
          }
          result.push(element);
          return result;
        },
        []
      );
    } else {
      output = elements;
    }

    return (
      <Grid.Row className="no-pointer-events">
        <Grid.Column>
          <div className="item-box no-select">
            <Title
              itemName={this.props.item.getName()}
              baseName={this.props.item.name}
              rarity={this.props.item.rarity}
            />
            <div className="item-stats">
              {output}
              {this.props.item.corrupted ? (
                <span className="text--corrupt">Corrupted</span>
              ) : null}
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default ItemBox;
