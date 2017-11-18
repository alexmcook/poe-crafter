import * as React from 'react';

interface StatProps {
  text: Text;
}

interface Text {
  text: string;
  crafted: boolean;
}

class Stat extends React.Component<StatProps> {
  render() {
    return (
      <div
        className={this.props.text.crafted ? 'text--crafted' : 'text--magic'}
      >
        {this.props.text.text}
      </div>
    );
  }
}

export default Stat;
