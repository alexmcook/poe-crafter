import * as React from 'react';
const genericBtn = require('../assets/button/genericbutton.png');
const genericBtnHighlight = require('../assets/button/genericbuttonhighlight.png');
const genericBtnActive = require('../assets/button/genericbuttonactive.png');
const genericBtnDisabled = require('../assets/button/genericbuttongrayscale.png');

interface GenericButtonProps {
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  onClick: () => void;
}

interface GenericButtonProps {
  disabled?: boolean;
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
    this.state = {
      buttonState: genericBtn
    };
  }

  handleMouseEnter() {
    this.setState({ buttonState: genericBtnHighlight });
  }

  handleMouseLeave() {
    this.setState({ buttonState: genericBtn });
  }

  handleMouseDown() {
    this.setState({ buttonState: genericBtnActive });
    if (!this.props.disabled) {
      this.props.onClick();
    }
  }

  handleMouseUp() {
    this.setState({ buttonState: genericBtnHighlight });
  }

  render() {
    return [(
      <image
        key={this.props.text + 'btn'}
        xlinkHref={
          this.props.disabled ? genericBtnDisabled : this.state.buttonState
        }
        width={this.props.width}
        height={this.props.height}
        x={this.props.x}
        y={this.props.y}
        onMouseEnter={e => this.handleMouseEnter()}
        onMouseLeave={e => this.handleMouseLeave()}
        onMouseDown={e => this.handleMouseDown()}
        onMouseUp={e => this.handleMouseUp()}
      />
    ), (
      <text
        key={this.props.text + 'text'}
        className={
          'no-pointer-events ' +
          (this.props.disabled ? 'crafting-text-disabled' : 'crafting-text')
        }
        x={this.props.x + this.props.width / 2}
        y={this.props.y + this.props.height / 2}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {this.props.text}
      </text>
    )];
  }
}

export default CraftButton;
