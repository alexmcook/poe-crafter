import * as React from 'react';
import Item from '../utils/item';
import { CraftingOption } from '../reducers/craftingOptionReducer';
const craftBtn = require('../assets/craftingbench/craftbutton.png');
const craftBtnHighlight = require('../assets/craftingbench/craftbuttonhighlight.png');
const craftBtnActive = require('../assets/craftingbench/craftbuttonactive.png');
const craftBtnDisabled = require('../assets/craftingbench/craftbuttongrayscale.png');

interface CraftButtonProps {
  item: Item;
  selectedOption?: CraftingOption;
  onClick: (
    craftingOption: CraftingOption
  ) => { type: string; payload: CraftingOption };
  disabled: boolean;
}

interface CraftButtonState {
  buttonState: string;
}

class CraftButton extends React.Component<CraftButtonProps, CraftButtonState> {
  private craftButton: SVGImageElement;
  constructor(props: CraftButtonProps) {
    super(props);
    this.state = { buttonState: craftBtn };
  }
  componentDidMount() {
    this.craftButton.addEventListener('mouseenter', () =>
      this.handleMouseEnter()
    );
    this.craftButton.addEventListener('mouseleave', () =>
      this.handleMouseLeave()
    );
    this.craftButton.addEventListener('mousedown', () =>
      this.handleMouseDown()
    );
    this.craftButton.addEventListener('mouseup', () => this.handleMouseUp());
  }

  componentWillUnmount() {
    this.craftButton.removeEventListener('mouseenter', () =>
      this.handleMouseEnter()
    );
    this.craftButton.removeEventListener('mouseleave', () =>
      this.handleMouseLeave()
    );
    this.craftButton.removeEventListener('mousedown', () =>
      this.handleMouseDown()
    );
    this.craftButton.removeEventListener('mouseup', () => this.handleMouseUp());
  }

  handleMouseEnter() {
    this.setState({ buttonState: craftBtnHighlight });
  }

  handleMouseLeave() {
    this.setState({ buttonState: craftBtn });
  }

  handleMouseDown() {
    this.props.onClick(this.props.selectedOption as CraftingOption);
    this.setState({ buttonState: craftBtnActive });
  }

  handleMouseUp() {
    this.setState({ buttonState: craftBtnHighlight });
  }

  render() {
    return (
      <svg>
        <image
          xlinkHref={
            this.props.disabled ? craftBtnDisabled : this.state.buttonState
          }
          ref={ref => {
            this.craftButton = ref as SVGImageElement;
          }}
          width="192"
          height="78"
          x="547"
          y="1636"
        />
      </svg>
    );
  }
}

export default CraftButton;
