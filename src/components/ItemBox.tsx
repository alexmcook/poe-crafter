import * as React from 'react';
import Title from './Title';
import Stat from './Stat';
import Item from '../utils/item';
import * as _ from 'lodash';
import * as poe from 'poe-mod-descriptions';

interface ItemBoxProps {
  item: Item;
}

class ItemBox extends React.Component<ItemBoxProps> {
  render() {
    const style: {} = {
      fontFamily: 'Fontin-SmallCaps',
      position: 'absolute',
      // top: 100 + 'px', // this.props.y
      // transform: 'translateY(-100%)',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      textAlign: 'center',
      fontSize: '10.875pt',
      letterSpacing: '0.1px',
      zIndex: '2'
    };

    let stats: JSX.Element[] = [];
    if (this.props.item.mods.length > 0) {
      let descriptions = poe.getDescriptions(this.props.item.mods);
      _.map(descriptions, (description, index) => {
        stats.push(<Stat key={index} text={description} />);
      });
    }

    return (
      <div style={style}>
        <Title
          itemName={this.props.item.itemName}
          baseName={this.props.item.name}
          rarity={this.props.item.rarity}
        />
        <div className="item-stats">{stats}</div>
      </div>
    );
  }
}

export default ItemBox;
