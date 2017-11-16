import * as React from 'react';

interface TabRectProps {
  xlinkHref: string;
  x: number;
  y: number;
  onClick: () => void;
  count: number;
}

class TabRect extends React.Component<TabRectProps> {
  render() {
    return (
      <svg>
        <rect
          className="rect-capture"
          onClick={this.props.onClick}
          x={this.props.x}
          y={this.props.y}
          opacity="0.7"
          fill="#04041E"
          width="84"
          height="84"
        />
        <image
          className="no-pointer-events"
          xlinkHref={this.props.xlinkHref}
          x={this.props.x}
          y={this.props.y}
          width="84"
          height="84"
        />
        <text
          className="currency-text no-pointer-events"
          x={this.props.x + 10}
          y={this.props.y + 30}
        >
          {this.props.count > 0 ? this.props.count : undefined}
        </text>
      </svg>
    );
  }
}

export default TabRect;