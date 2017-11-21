import * as React from 'react';
import * as _ from 'lodash';
import { WeaponOutput } from '../utils/item';

interface WeaponProps {
  weapon: WeaponOutput;
  quality: number;
}

class Stat extends React.Component<WeaponProps> {
  render() {
    let phys: JSX.Element,
      elements: JSX.Element[] = [],
      ele: JSX.Element | undefined,
      chaos: JSX.Element | undefined,
      crit: JSX.Element,
      aps: JSX.Element,
      range: JSX.Element | undefined;

    let physColor =
      this.props.weapon.flatPhysMin ||
      this.props.weapon.incPhys ||
      this.props.quality > 0
        ? 'text--magic'
        : 'text--normal';
    phys = (
      <div>
        Physical Damage:{' '}
        <span className={physColor}>
          {this.props.weapon.physMin}-{this.props.weapon.physMax}
        </span>
      </div>
    );

    if (this.props.weapon.fireMin) {
      var fire = (
        <span key="fire" className="text--fire">
          {this.props.weapon.fireMin}-{this.props.weapon.fireMax}
        </span>
      );
      elements.push(fire);
    }
    if (this.props.weapon.coldMin) {
      var cold = (
        <span key="cold" className="text--cold">
          {this.props.weapon.coldMin}-{this.props.weapon.coldMax}
        </span>
      );
      elements.push(cold);
    }
    if (this.props.weapon.lightMin) {
      var light = (
        <span key="light" className="text--light">
          {this.props.weapon.lightMin}-{this.props.weapon.lightMax}
        </span>
      );
      elements.push(light);
    }

    function createComma(key: number): JSX.Element {
      return (
        <span key={'commaWeapon' + key} className="text--descriptor">
          ,{' '}
        </span>
      );
    }

    if (elements.length > 0) {
      ele = (
        <div>
          Elemental Damage:{' '}
          {_.reduce(
            elements,
            (result: {}[], element, index) => {
              if (result.length > 0) {
                result.push(createComma(index));
              }
              result.push(element);
              return result;
            },
            []
          )}
        </div>
      );
    }

    if (this.props.weapon.chaosMin) {
      chaos = (
        <div>
          Chaos Damage:{' '}
          <span className="text--chaos">
            {this.props.weapon.chaosMin}-{this.props.weapon.chaosMax}
          </span>
        </div>
      );
    }

    let critColor = this.props.weapon.incCrit ? 'text--magic' : 'text--normal';
    crit = (
      <div>
        Critical Strike Chance:{' '}
        <span className={critColor}>{this.props.weapon.crit}%</span>
      </div>
    );

    let apsColor = this.props.weapon.incAS ? 'text--magic' : 'text--normal';
    aps = (
      <div>
        Attacks Per Second:{' '}
        <span className={apsColor}>{this.props.weapon.aps}</span>
      </div>
    );

    if (this.props.weapon.range) {
      range = (
        <div>
          Weapon Range:{' '}
          <span className="text--normal">{this.props.weapon.range}</span>
        </div>
      );
    }

    return (
      <div className="text--descriptor">
        {phys}
        {ele}
        {chaos}
        {crit}
        {aps}
        {range}
      </div>
    );
  }
}

export default Stat;
