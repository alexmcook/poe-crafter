import * as React from 'react';
import * as _ from 'lodash';
import { Rarity } from '../utils/item';
import Title from '../components/Title';
import Separator from '../components/Separator';

interface CurrencyTooltipProps {
  name: string;
  text: string[] | string;
  stackSize?: number;
}

class CurrencyTooltip extends React.Component<CurrencyTooltipProps> {
  reduceText(): JSX.Element[] {
    let text =
      typeof this.props.text === 'string' ? [this.props.text] : this.props.text;
    return _.reduce(
      text,
      (result: JSX.Element[], line: string, index: number) => {
        if (line === '') {
          result.push(<br key={'br' + index} />);
        } else {
          result.push(
            <div key={'div' + index} className="text--magic">
              {line}
            </div>
          );
        }
        return result;
      },
      []
    );
  }

  createSeparator(key: number, rarity: string) {
    return <Separator key={'separator' + key} rarity={rarity} />;
  }

  createStackSize(n: number) {
    return (
      <span className="text--descriptor">
        Stack Size: <span className="text--white">1/{n}</span>
      </span>
    );
  }

  render() {
    return (
      <div className="currency-tooltip no-select no-pointer-events">
        <Title
          itemName={this.props.name}
          baseName={''}
          rarity={Rarity.CURRENCY}
        />
        <div className="item-stats">
          {this.props.stackSize
            ? this.createStackSize(this.props.stackSize)
            : null}
          {this.props.stackSize ? this.createSeparator(0, 'currency') : null}
          {this.reduceText()}
        </div>
      </div>
    );
  }
}

export default CurrencyTooltip;
