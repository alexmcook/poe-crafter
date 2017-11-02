import * as React from 'react';
import { DefenseOutput } from '../utils/item';

interface StatProps {
  defense: DefenseOutput;
  quality: number;
}

class Defense extends React.Component<StatProps> {
  render() {
    let block: JSX.Element | undefined,
      armor: JSX.Element | undefined,
      evasion: JSX.Element | undefined,
      energyShield: JSX.Element | undefined;

    if (this.props.defense.block) {
      let blockColor = this.props.defense.incBlock
        ? 'text--magic'
        : 'text--normal';
      block = (
        <div>
          <span>Chance to Block: </span>
          <span className={blockColor}>{this.props.defense.block}%</span>
        </div>
      );
    }

    if (this.props.defense.armor) {
      var armorColor =
        this.props.defense.flatArmor ||
        this.props.defense.incArmor ||
        this.props.quality > 0
          ? 'text--magic'
          : 'text--normal';
      armor = (
        <div>
          <span>Armour: </span>
          <span className={armorColor}>{this.props.defense.armor}</span>
        </div>
      );
    }

    if (this.props.defense.evasion) {
      var evasionColor =
        this.props.defense.flatEvasion ||
        this.props.defense.incEvasion ||
        this.props.quality > 0
          ? 'text--magic'
          : 'text--normal';
      evasion = (
        <div>
          <span>Evasion: </span>
          <span className={evasionColor}>{this.props.defense.evasion}</span>
        </div>
      );
    }

    if (this.props.defense.energyShield) {
      var energyShieldColor =
        this.props.defense.flatEnergyShield ||
        this.props.defense.incEnergyShield ||
        this.props.quality > 0
          ? 'text--magic'
          : 'text--normal';
      energyShield = (
        <div>
          <span>Energy Shield: </span>
          <span className={energyShieldColor}>
            {this.props.defense.energyShield}
          </span>
        </div>
      );
    }

    return (
      <div className="text--descriptor">
        {block}
        {armor}
        {evasion}
        {energyShield}
      </div>
    );
  }
}

export default Defense;
