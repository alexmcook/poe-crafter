import * as React from 'react';

interface ButtonProps {
  action: () => { type: string };
  action2: () => { type: string };
}

class Buttons extends React.Component<ButtonProps> {
  render() {
    return (
      <div>
        <button onClick={this.props.action}>Chaos</button>
        <button onClick={this.props.action2}>Remove</button>
      </div>
    );
  }
}

export default Buttons;
