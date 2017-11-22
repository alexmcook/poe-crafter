import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'lodash';
import { Portal } from 'semantic-ui-react';

interface TooltipProps {
  trigger: JSX.Element;
  x?: number;
  y?: number;
  alwaysOn?: boolean;
}

interface TooltipState {
  x: number;
  y: number;
}

class Tooltip extends React.Component<TooltipProps, TooltipState> {
  private ref: Element | null;
  constructor(props: TooltipProps) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  calcPosition() {
    if (this.ref) {
      let rect = this.ref.getBoundingClientRect();
      let x = rect.left + (rect.width / 2);
      let y = rect.top;
      if (this.state.x !== x || this.state.y !== y) {
        this.setState({ x: x, y: y });
      }
    }
  }

  componentDidMount() {
    this.ref = ReactDOM.findDOMNode(this);
    if (!(this.props.x && this.props.y)) {
      window.addEventListener(
        'resize',
        _.debounce(() => this.calcPosition(), 120)
      );
    }
  }

  componentWillUnmount() {
    if (!(this.props.x && this.props.y)) {
      window.removeEventListener(
        'resize',
        _.debounce(() => this.calcPosition(), 120)
      );
    }
  }

  render() {
    const style: {} = {
      position: 'absolute',
      left: this.props.x ? this.props.x : this.state.x + 'px',
      top: this.props.y ? this.props.y : this.state.y + 'px',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -100%)'
    };
    const tooltip = (
      <a
        className="no-select no-pointer-events"
        style={style}
        ref={ref => (ref ? this.calcPosition() : null)}
      >
        {this.props.children}
      </a>
    );
    return (
      this.props.children && (
        <Portal
          trigger={this.props.trigger}
          openOnTriggerMouseEnter={true}
          closeOnTriggerMouseLeave={true}
          open={this.props.alwaysOn ? this.props.alwaysOn : undefined}
        >
          {tooltip}
        </Portal>
      )
    );
  }
}

export default Tooltip;
