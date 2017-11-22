import * as React from 'react';
import TooltipContainer from '../containers/TooltipContainer';
import CurrencyTooltip from '../components/CurrencyTooltip';

interface TabRectProps {
  name: string;
  xlinkHref: string;
  x: number;
  y: number;
  onClick: (e: MouseEvent) => void;
  count: number;
  currencyText?: string;
  essenceText?: string[];
  stackSize?: number;
}

class TabRect extends React.Component<TabRectProps> {
  render() {
    return (
      <TooltipContainer
        trigger={
          <a>
            <rect
              className="rect-capture"
              onClick={e => this.props.onClick(e.nativeEvent)}
              onContextMenu={e => this.props.onClick(e.nativeEvent)}
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
          </a>
        }
      >
        <CurrencyTooltip
          name={this.props.name}
          text={
            this.props.currencyText
              ? this.props.currencyText
              : this.props.essenceText
                ? this.props.essenceText
                : this.props.name
          }
          stackSize={this.props.stackSize ? this.props.stackSize : undefined}
        />
      </TooltipContainer>
    );
  }
}

export default TabRect;
