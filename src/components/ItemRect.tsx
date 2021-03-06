import * as React from 'react';
import ItemBoxContainer from '../containers/ItemBoxContainer';
import TooltipContainer from '../containers/TooltipContainer';

interface ItemRectProps {
  xlinkHref: string;
  x: number;
  y: number;
  width: number;
  height: number;
  itemWidth: number;
  itemHeight: number;
  atlasType: string;
  onClick: (e: MouseEvent) => { type: string; payload: boolean };
  alwaysOn?: boolean;
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

  render() {
    const atlasBackground = (
      <image
        className="no-pointer-events"
        xlinkHref={
          this.props.atlasType === 'SHAPER'
            ? 'http://web.poecdn.com/image/inventory/ShaperBackground.png?w=' +
              this.props.itemWidth +
              '&h=' +
              this.props.itemHeight +
              '&x=0&y=0'
            : 'http://web.poecdn.com/image/inventory/ElderBackground.png?w=' +
              this.props.itemWidth +
              '&h=' +
              this.props.itemHeight
        }
        x={this.state.dimensions.x}
        y={this.state.dimensions.y}
        width={this.state.dimensions.width}
        height={this.state.dimensions.height}
      />
    );
    return (
      <TooltipContainer
        trigger={
          <svg
            viewBox="0 0 166 340"
            width={this.props.width}
            height={this.props.height}
            x={this.props.x}
            y={this.props.y}
            preserveAspectRatio="xMinYMin meet"
          >
            <rect
              className="rect-capture"
              onClick={e => this.props.onClick(e.nativeEvent)}
              x={0}
              y={0}
              opacity="0.7"
              fill="#04041E"
              width={166}
              height={340}
            />
            {this.props.atlasType !== 'NONE' ? atlasBackground : null}
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
        }
        alwaysOn={this.props.alwaysOn}
      >
        <ItemBoxContainer />
      </TooltipContainer>
    );
  }
}

export default ItemRect;
