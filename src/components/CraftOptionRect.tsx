import * as React from 'react';
import TooltipContainer from '../containers/TooltipContainer';
import CraftOptionTooltip from '../components/CraftOptionTooltip';

interface CraftOptionRectProps {
  x: number;
  y: number;
  types: string[];
  error: number;
  handleScroll: (e: WheelEvent) => void;
}

class CraftOptionRect extends React.Component<CraftOptionRectProps> {
  render() {
    const trigger = (
      <rect
        onWheel={e => this.props.handleScroll(e.nativeEvent)}
        opacity="0"
        x={this.props.x}
        y={this.props.y}
        width="880"
        height="173"
      />
    );
    return (
      <TooltipContainer
        trigger={trigger}
        mountToCursor={true}
        mountOffset={{ x: 40, y: 0 }}
      >
        <CraftOptionTooltip types={this.props.types} error={this.props.error} />
      </TooltipContainer>
    );
  }
}

export default CraftOptionRect;
