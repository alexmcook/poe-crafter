import * as React from 'react';
import { CraftingOption } from '../reducers/craftingOptionReducer';
import TooltipContainer from '../containers/TooltipContainer';
import CraftOptionTooltip from '../components/CraftOptionTooltip';
const option = require('../assets/craftingbench/craftingbenchslot.png');
const optionHighlight = require('../assets/craftingbench/craftingbenchslothighlight.png');

interface CraftOptionProps {
  option: CraftingOption;
  selectedOption: CraftingOption;
  available: number;
  x: number;
  y: number;
  optionClick: (
    option?: CraftingOption
  ) => { type: string; payload: CraftingOption };
  handleScroll: (e: WheelEvent) => void;
}

class CraftOption extends React.Component<CraftOptionProps> {
  getSource(name: string) {
    switch (name) {
      //#region regular currency
      case 'Orb of Transmutation':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeToMagic.png';
      case 'Orb of Alteration':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollMagic.png';
      case 'Exalted Orb':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyAddModToRare.png';
      case 'Regal Orb':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeMagicToRare.png';
      case 'Orb of Alchemy':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeToRare.png';
      case 'Chaos Orb':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png';
      case 'Blessed Orb':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyImplicitMod.png';
      case 'Orb of Augmentation':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyAddModToMagic.png';
      case 'Divine Orb':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyModValues.png';
      case 'Jeweller\'s Orb':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketNumbers.png';
      case 'Orb of Fusing':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketLinks.png';
      case 'Chromatic Orb':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketColours.png';
      case 'Orb of Scouring':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyConvertToNormal.png';
      case 'Vaal Orb':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyCorrupt.png';
      //#endregion
      default:
        return '';
    }
  }

  getTextWidth(text: string, size: number): number {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    if (context) {
      context.font = size + 'pt Fontin-SmallCaps';
      let metrics = context.measureText(text);
      return metrics.width;
    } else {
      return -1;
    }
  }

  createTextElement(
    offsetX: number,
    offsetY: number,
    index?: number
  ): JSX.Element {
    let size = index !== undefined ? 22 : 28;
    while (
      this.getTextWidth(
        this.props.option.text
          ? this.props.option.text[0]
          : this.props.option.name,
        size
      ) > 700
    ) {
      size--;
    }
    let style = {
      fontSize: size + 'pt'
    };
    let element = (
      <text
        key={'text' + offsetX + offsetY + this.props.option.order}
        className={
          (this.props.available === 0 ? 'crafting-text' : 'crafting-text-red') +
          ' no-pointer-events'
        }
        style={style}
        x={this.props.x + offsetX}
        y={this.props.y + offsetY}
      >
        {this.props.option.text
          ? this.props.option.text[index ? index : 0]
          : this.props.option.name}
      </text>
    );
    return element;
  }

  render() {
    const singleOptionText =
      (this.props.option.text && this.props.option.text.length === 1) ||
      !this.props.option.text
        ? this.createTextElement(90, 64)
        : null;
    const doubleOptionText1 =
      this.props.option.text && this.props.option.text.length > 1
        ? this.createTextElement(90, 44, 0)
        : null;
    const doubleOptionText2 =
      this.props.option.text && this.props.option.text.length > 1
        ? this.createTextElement(90, 78, 1)
        : null;
    return (
      <TooltipContainer
        trigger={
          <svg>
            <image
              xlinkHref={
                this.props.selectedOption === this.props.option
                  ? optionHighlight
                  : option
              }
              onClick={() => this.props.optionClick(this.props.option)}
              onWheel={e => this.props.handleScroll(e.nativeEvent)}
              width="880"
              height="173"
              x={this.props.x}
              y={this.props.y}
            />
            {singleOptionText}
            {doubleOptionText1}
            {doubleOptionText2}
            <text
              className="crafting-text-gray no-pointer-events"
              x={this.props.x + 90}
              y={this.props.y + 142}
            >
              {this.props.option.mod
                ? 'lvl: ' + this.props.option.mod.level
                : null}
            </text>
            <text
              className="crafting-text-gray no-pointer-events"
              textAnchor="end"
              x={this.props.x + 742}
              y={this.props.y + 142}
            >
              cost: {this.props.option.costValue}
            </text>
            <image
              className="no-pointer-events"
              xlinkHref={this.getSource(this.props.option.costItem)}
              width="48"
              height="48"
              x={this.props.x + 746}
              y={this.props.y + 108}
            />
          </svg>
        }
        mountToCursor={true}
        mountOffset={{ x: 40, y: 0 }}
      >
        <CraftOptionTooltip
          types={this.props.option.itemTypes}
          error={this.props.available}
        />
      </TooltipContainer>
    );
  }
}

export default CraftOption;
