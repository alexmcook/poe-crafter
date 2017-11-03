import * as React from 'react';

interface ItemRectProps {
  xlinkHref: string;
  x: number;
  y: number;
  width: number;
  height: number;
  onClick: (e: React.MouseEvent<SVGRectElement>) => { type: string; payload: boolean; };
}

interface ItemRectState {
  dimensions: Dimension;
}

interface Dimension {
  x: number;
  y: number;
}

class ItemRect extends React.Component<ItemRectProps, ItemRectState> {
  constructor(props: ItemRectProps) {
    super(props);
    this.state = { dimensions: { x: -1000, y: -1000 } };
    this.onLoad = this.onLoad.bind(this);
  }

  onLoad(image: SVGImageElement) {
    let { width, height } = image.getBBox();
    this.setState({
      dimensions: {
        x: this.props.x + this.props.width / 2 - width / 2,
        y: this.props.y + this.props.height / 2 - height / 2
      }
    });
  }
  
  render() {
    const { x, y } = this.state.dimensions;
    return (
      <svg>
        <rect
          className="rect-capture"
          onClick={(e) => this.props.onClick(e)}
          x={this.props.x}
          y={this.props.y}
          opacity="0.7"
          fill="#04041E"
          width={this.props.width}
          height={this.props.height}
          onMouseEnter={() => null}
          onMouseLeave={() => null}
        />
        <image
          className="no-pointer-events"
          xlinkHref={this.props.xlinkHref}
          x={x}
          y={y}
          onLoad={(e) => this.onLoad(e.target as SVGImageElement)}
        />
      </svg>
    );
  }
}

export default ItemRect;
