import * as React from 'react';

interface SeparatorProps {
  rarity: string;
}

class Separator extends React.Component<SeparatorProps> {
  render() {
    return <div className={'item-separator--' + this.props.rarity} />;
  }
}

export default Separator;
