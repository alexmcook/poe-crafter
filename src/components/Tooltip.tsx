import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'lodash';
import { Portal } from 'semantic-ui-react';

interface TooltipProps {
  trigger: JSX.Element;
  cursorX: number;
  cursorY: number;
  alwaysOn?: boolean;
  mountToCursor?: boolean;
  mountOffset?: { x: number; y: number };
}

interface TooltipState {
  x: number;
  y: number;
}

class Tooltip extends React.Component<TooltipProps, TooltipState> {
  private ref: Element;
  private childRef: Element;
  constructor(props: TooltipProps) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  calcPosition() {
    if (this.ref && this.childRef) {
      if (this.props.mountToCursor) {
        this.setState({ x: this.props.cursorX, y: this.props.cursorY });
      } else {
        let rect = this.ref.getBoundingClientRect();
        let childRect = this.childRef.getBoundingClientRect();
        let x = rect.left + rect.width / 2 + scrollX;
        let y = rect.top + scrollY;
        if (y - childRect.height < 0) {
          y = childRect.height;
        }
        if (x - childRect.width / 2 < 0) {
          x = childRect.width / 2;
        } else if (x + childRect.width / 2 > window.innerWidth) {
          x = window.innerWidth - childRect.width / 2;
        }
        if (this.state.x !== x || this.state.y !== y) {
          this.setState({ x: x, y: y });
        }
      }
    }
  }

  shouldComponentUpdate(
    nextProps: TooltipProps,
    nextState: TooltipState
  ): boolean {
    if (nextProps.trigger !== this.props.trigger) {
      return true;
    } else if (nextProps.mountToCursor) {
      let deltaX = Math.abs(nextProps.cursorX - this.state.x);
      let deltaY = Math.abs(nextProps.cursorY - this.state.y);
      if (deltaX === 0 && deltaY === 0) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

  handleRef(ref: Element) {
    this.childRef = ref;
    this.calcPosition();
  }

  componentDidMount() {
    this.ref = ReactDOM.findDOMNode(this);
    if (!this.props.mountToCursor) {
      window.addEventListener(
        'resize',
        _.debounce(() => this.calcPosition(), 100)
      );
    }
  }

  componentWillUnmount() {
    if (!this.props.mountToCursor) {
      window.removeEventListener(
        'resize',
        _.debounce(() => this.calcPosition(), 100)
      );
    }
  }

  render() {
    const style: {} = {
      position: 'absolute',
      left:
        this.state.x +
        (this.props.mountOffset ? this.props.mountOffset.x : 0) +
        'px',
      top:
        this.state.y +
        (this.props.mountOffset ? this.props.mountOffset.y : 0) +
        'px',
      right: 'auto',
      bottom: 'auto',
      transform: this.props.mountToCursor ? 'none' : 'translate(-50%, -100%)'
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
