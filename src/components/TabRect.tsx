import * as React from 'react';
import { Popup } from 'semantic-ui-react';
import CurrencyTooltip from '../components/CurrencyTooltip';

interface TabRectProps {
  name: string;
  xlinkHref: string;
  x: number;
  y: number;
  onClick: (e: React.MouseEvent<SVGRectElement>) => void;
  count: number;
  currencyText?: string;
  essenceText?: string[];
  stackSize?: number;
}

class TabRect extends React.Component<TabRectProps> {
  render() {
    return (
      <Popup
        trigger={
          <svg>
            <rect
              className="rect-capture"
              onClick={this.props.onClick}
              onContextMenu={this.props.onClick}
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
              {this.props.count >= 10000
                ? (this.props.count / 1000).toFixed(1) + 'k'
                : this.props.count > 0 ? this.props.count : undefined}
            </text>
          </svg>
        }
        content={
          <CurrencyTooltip
            name={this.props.name}
            text={
              this.props.essenceText ? this.props.essenceText : this.props.name
            }
            stackSize={this.props.stackSize ? this.props.stackSize : undefined}
          />
        }
        style={{
          background: 'rgba(0, 0, 0, 0)',
          boxShadow: 'none',
          border: 'none',
          borderRadius: 'none'
        }}
        basic={true}
        position="top center"
        className="no-pointer-events"
      />
    );
  }
}

export default TabRect;
