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
  private childRef: Element | null;
  constructor(props: TooltipProps) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  calcPosition() {
    if (this.ref && this.childRef) {
      let rect = this.ref.getBoundingClientRect();
      let childRect = this.childRef.getBoundingClientRect();
      let x = rect.left + rect.width / 2;
      let y = rect.top;
      x = x - childRect.width / 2;
      y = y - childRect.height;
      if (x < 0) {
        x = 0;
      } else if (x + childRect.width > window.innerWidth) {
        x = window.innerWidth - childRect.width;
      }
      if (y < 0) {
        y = 0;
      } else if (y + childRect.height > window.innerHeight) {
        y = window.innerHeight - childRect.height;
      }
      if (this.state.x !== x || this.state.y !== y) {
        this.setState({ x: x, y: y });
      }
    }
  }

  componentDidMount() {
    this.ref = ReactDOM.findDOMNode(this);
    window.addEventListener(
      'resize',
      _.debounce(() => this.calcPosition(), 250)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      _.debounce(() => this.calcPosition(), 250)
    );
  }

  handleRef(ref: Element) {
    this.childRef = ref ? ref : null;
    if (!this.props.x && !this.props.y) {
      this.calcPosition();
    }
  }

  render() {
    const style: {} = {
      position: 'absolute',
      left: this.props.x ? this.props.x : this.state.x + 'px',
      top: this.props.y ? this.props.y : this.state.y + 'px'
    };
    const tooltip = (
      <a
        className="no-select no-pointer-events"
        style={style}
        ref={ref => (ref ? this.handleRef(ref) : null)}
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
