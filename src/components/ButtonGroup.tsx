import * as React from 'react';

interface ButtonGroupProps {
  whetstone: () => { type: string };
  armorScrap: () => { type: string };
  transmute: () => { type: string };
  alteration: () => { type: string };
  annulment: () => { type: string };
  exalted: () => { type: string };
  regal: () => { type: string };
  alchemy: () => { type: string };
  chaos: () => { type: string };
  blessed: () => { type: string };
  augment: () => { type: string };
  divine: () => { type: string };
  jeweller: () => { type: string };
  fusing: () => { type: string };
  chromatic: () => { type: string };
  scouring: () => { type: string };
  eternal: () => { type: string };
  imprint: () => { type: string };
}

const style: {} = {
  position: 'absolute',
  bottom: 200
};

class ButtonGroup extends React.Component<ButtonGroupProps> {
  render() {
    return (
      <div style={style}>
        <button onClick={this.props.whetstone}>Whetstone</button>
        <button onClick={this.props.armorScrap}>ArmorScrap</button>
        <button onClick={this.props.alchemy}>Alchemy</button>
        <button onClick={this.props.scouring}>Scouring</button>
        <button onClick={this.props.transmute}>Transmute</button>
        <button onClick={this.props.alteration}>Alteration</button>
        <button onClick={this.props.augment}>Augment</button>
        <button onClick={this.props.regal}>Regal</button>
        <button onClick={this.props.chaos}>Chaos</button>
        <button onClick={this.props.annulment}>Annulment</button>
        <button onClick={this.props.exalted}>Exalted</button>
        <button onClick={this.props.divine}>Divine</button>
        <button onClick={this.props.blessed}>Blessed</button>
      </div>
    );
  }
}

export default ButtonGroup;
