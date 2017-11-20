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
  constructor(props: GenericButtonProps) {
    super(props);
    this.state = { buttonState: genericBtn };
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
          width={this.props.width}
          height={this.props.height}
          x={this.props.x}
          y={this.props.y}
          onMouseEnter={e => this.handleMouseEnter()}
          onMouseLeave={e => this.handleMouseLeave()}
          onMouseDown={e => this.handleMouseDown()}
          onMouseUp={e => this.handleMouseUp()}
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
