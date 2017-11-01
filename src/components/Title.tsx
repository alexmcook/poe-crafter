import * as React from 'react';

interface TitleProps {
  itemName: string;
  baseName: string;
  rarity: string;
}

class Title extends React.Component<TitleProps> {
  render() {
    let title2;
    if (this.props.itemName) {
      title2 = <div className="text--title">{this.props.itemName}</div>;
    }
    return (
      <div
        className={
          'title-bar--' + this.props.rarity + ' text--' + this.props.rarity
        }
      >
        <div className={'title-bar-left--' + this.props.rarity} />
        <div className={'title-bar-right--' + this.props.rarity} />
        <div className="text--title">{this.props.baseName}</div>
        {title2}
      </div>
    );
  }
}

export default Title;
