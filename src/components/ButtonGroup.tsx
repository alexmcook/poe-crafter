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

class ButtonGroup extends React.Component<ButtonGroupProps> {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
