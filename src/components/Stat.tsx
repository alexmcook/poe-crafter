import * as React from 'react';

interface StatProps {
  text: string;
}

class Stat extends React.Component<StatProps> {
  render() {
    return <div className="text--magic">{this.props.text}</div>;
  }
}

export default Stat;
