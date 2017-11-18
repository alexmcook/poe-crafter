import * as React from 'react';
const genericBtn = require('../assets/button/genericbutton.png');
const genericBtnHighlight = require('../assets/button/genericbuttonhighlight.png');
const genericBtnActive = require('../assets/button/genericbuttonactive.png');

interface GenericButtonProps {
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  onClick: () => void;
}

interface GenericButtonState {
  buttonState: string;
}

class CraftButton extends React.Component<
  GenericButtonProps,
  GenericButtonState
> {
  private genericButton: SVGImageElement;
  constructor(props: GenericButtonProps) {
    super(props);
    this.state = { buttonState: genericBtn };
  }
  componentDidMount() {
    this.genericButton.addEventListener('mouseenter', () =>
      this.handleMouseEnter()
    );
    this.genericButton.addEventListener('mouseleave', () =>
      this.handleMouseLeave()
    );
    this.genericButton.addEventListener('mousedown', () =>
      this.handleMouseDown()
    );
    this.genericButton.addEventListener('mouseup', () => this.handleMouseUp());
  }

  componentWillUnmount() {
    this.genericButton.removeEventListener('mouseenter', () =>
      this.handleMouseEnter()
    );
    this.genericButton.removeEventListener('mouseleave', () =>
      this.handleMouseLeave()
    );
    this.genericButton.removeEventListener('mousedown', () =>
      this.handleMouseDown()
    );
    this.genericButton.removeEventListener('mouseup', () =>
      this.handleMouseUp()
    );
  }

  handleMouseEnter() {
    this.setState({ buttonState: genericBtnHighlight });
  }

  handleMouseLeave() {
    this.setState({ buttonState: genericBtn });
  }

  handleMouseDown() {
    this.setState({ buttonState: genericBtnActive });
    this.props.onClick();
  }

  handleMouseUp() {
    this.setState({ buttonState: genericBtnHighlight });
  }

  render() {
    return (
      <svg>
        <image
          xlinkHref={this.state.buttonState}
          ref={ref => {
            this.genericButton = ref as SVGImageElement;
          }}
          width={this.props.width}
          height={this.props.height}
          x={this.props.x}
          y={this.props.y}
        />
        <text
          className="no-pointer-events crafting-text"
          x={this.props.x + this.props.width / 2}
          y={this.props.y + this.props.height / 2}
          textAnchor="middle"
          alignmentBaseline="central"
        >
          {this.props.text}
        </text>
      </svg>
    );
  }
}

export default CraftButton;
