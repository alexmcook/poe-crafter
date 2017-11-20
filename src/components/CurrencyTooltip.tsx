import * as React from 'react';
import { Rarity } from '../utils/item';
import Title from '../components/Title';

interface CurrencyTooltipProps {
  name: string;
  text: string;
}

class CurrencyTooltip extends React.Component<CurrencyTooltipProps> {
  render() {
    return (
      <div className="currency-tooltip no-select no-pointer-events">
        <Title
          itemName={this.props.name}
          baseName={''}
          rarity={Rarity.CURRENCY}
        />
        <div className="item-stats text--magic">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default CurrencyTooltip;
