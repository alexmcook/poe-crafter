import * as React from 'react';

interface ItemRectProps {
  xlinkHref: string;
  x: number;
  y: number;
  width: number;
  height: number;
  onClick: (
    e: React.MouseEvent<SVGRectElement>
  ) => { type: string; payload: boolean };
  onMouseEnter: () => { type: string };
  onMouseLeave: () => { type: string };
  setItemRect: (
    rect: SVGRectElement
  ) => { type: string; payload: SVGRectElement };
  craftingTab?: boolean;
}

interface ItemRectState {
  dimensions: Dimension;
}

interface Dimension {
  width: number;
  height: number;
  x: number;
  y: number;
}

class ItemRect extends React.Component<ItemRectProps, ItemRectState> {
  constructor(props: ItemRectProps) {
    super(props);
    this.state = { dimensions: { width: 0, height: 0, x: -1000, y: -1000 } };
  }

  componentDidMount() {
    this.getImg();
  }

  componentWillReceiveProps(props: ItemRectProps) {
    this.getImg();
  }

  getImg() {
    let img = new Image();
    img.src = this.props.xlinkHref;
    img.onload = e => this.onLoad(e.target as HTMLImageElement);
  }

  onLoad(image: HTMLImageElement) {
    this.setState({
      dimensions: {
        width: image.width,
        height: image.height,
        x: 166 / 2 - image.width / 2,
        y: 340 / 2 - image.height / 2
      }
    });
  }

  doThis(e: SVGImageElement) {
    console.log('state');
    console.log(e.getBBox());
  }

  render() {
    return (
      <svg>
        <rect
          ref={ref => {
            if (ref !== null) {
              this.props.setItemRect(ref);
            }
          }}
          className="rect-capture"
          onClick={e => this.props.onClick(e)}
          x={this.props.x}
          y={this.props.y}
          opacity="0.7"
          fill="#04041E"
          width={this.props.width}
          height={this.props.height}
          onMouseEnter={() => this.props.onMouseEnter()}
          onMouseLeave={() => this.props.onMouseLeave()}
        />
        <svg 
          viewBox="0 0 166 340"
          width={this.props.width}
          height={this.props.height}
          x={this.props.x}
          y={this.props.y}
          preserveAspectRatio="xMinYMin meet"
        >
          <image
            className="no-pointer-events"
            xlinkHref={this.props.xlinkHref}
            x={this.state.dimensions.x}
            y={this.state.dimensions.y}
            width={this.state.dimensions.width}
            height={this.state.dimensions.height}
            onLoad={() => this.getImg()}
          />
        </svg>
      </svg>
    );
  }
}

export default ItemRect;
