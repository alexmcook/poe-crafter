import * as React from 'react';
import * as _ from 'lodash';
import { CraftingOption } from '../reducers/craftingOptionReducer';
import ItemRect from '../components/ItemRect';
import ItemSockets from '../components/ItemSockets';
import ItemContainer from '../containers/ItemContainer';
import { Grid } from 'semantic-ui-react';
import Tooltip from '../components/Tooltip';
import CraftOption from '../components/CraftOption';
import CraftOptionTooltip from '../components/CraftOptionTooltip';
import CraftButton from '../components/CraftButton';
import GenericButton from '../components/GenericButton';
import Item from '../utils/item';
import { checkAvailability } from '../utils/itemFunctions';
const background = require('../assets/craftingbench/craftingbench.png');
const border = require('../assets/craftingbench/craftingbenchborder.png');
const titleBar = require('../assets/craftingbench/craftingtitlebar.png');
const closeBtn = require('../assets/craftingbench/craftclosebutton.png');
const option = require('../assets/craftingbench/craftingbenchslot.png');
const optionHighlight = require('../assets/craftingbench/craftingbenchslothighlight.png');
const scrollBar = require('../assets/craftingbench/scrollbar.png');
const scroller = require('../assets/craftingbench/scroller.png');

interface CraftingTabProps {
  currentTab: string;
  item: Item;
  itemSockets: string;
  itemLinks: string;
  verticalSockets: boolean;
  itemArt: string;
  mouseMove: (
    e: MouseEvent
  ) => { type: string; payload: { x: number; y: number } };
  mouseLeave: () => { type: string; payload: {} };
  itemRectMouseEnter: () => { type: string; payload: {} };
  itemRectMouseLeave: () => { type: string; payload: {} };
  setCurrentTab: (
    currentTab: SVGSVGElement
  ) => { type: string; payload: SVGSVGElement };
  setItemRect: (
    rect: SVGRectElement
  ) => { type: string; payload: SVGRectElement };
  craftClick: (
    option: CraftingOption
  ) => { type: string; payload: CraftingOption };
  optionClick: (
    option?: CraftingOption
  ) => { type: string; payload: CraftingOption };
  craftingOptions: {
    haku: CraftingOption[];
    elreon: CraftingOption[];
    catarina: CraftingOption[];
    vagan: CraftingOption[];
    tora: CraftingOption[];
    leo: CraftingOption[];
    vorici: CraftingOption[];
  };
  selectedOption: CraftingOption;
  cursorX: number;
  cursorY: number;
}

interface CraftingTabState {
  scrollerPos: number;
  options: CraftingOption[];
  optionsPos: number;
}

class CraftingTab extends React.Component<CraftingTabProps, CraftingTabState> {
  private scroller: SVGImageElement;
  private scrollBar: SVGImageElement;
  constructor(props: CraftingTabProps) {
    super(props);
    this.state = {
      scrollerPos: 0,
      options: this.props.craftingOptions.haku,
      optionsPos: 0
    };
  }

  handleChangeMaster(master: string) {
    this.props.optionClick(undefined);
    switch (master) {
      case 'HAKU':
        this.setState({
          scrollerPos: 0,
          options: this.props.craftingOptions.haku,
          optionsPos: 0
        });
        break;
      case 'ELREON':
        this.setState({
          scrollerPos: 0,
          options: this.props.craftingOptions.elreon,
          optionsPos: 0
        });
        break;
      case 'CATARINA':
        this.setState({
          scrollerPos: 0,
          options: this.props.craftingOptions.catarina,
          optionsPos: 0
        });
        break;
      case 'VAGAN':
        this.setState({
          scrollerPos: 0,
          options: this.props.craftingOptions.vagan,
          optionsPos: 0
        });
        break;
      case 'TORA':
        this.setState({
          scrollerPos: 0,
          options: this.props.craftingOptions.tora,
          optionsPos: 0
        });
        break;
      case 'LEO':
        this.setState({
          scrollerPos: 0,
          options: this.props.craftingOptions.leo,
          optionsPos: 0
        });
        break;
      case 'VORICI':
        this.setState({
          scrollerPos: 0,
          options: this.props.craftingOptions.vorici,
          optionsPos: 0
        });
        break;
      default:
        break;
    }
  }

  handleScroll(e?: WheelEvent, delta?: number) {
    let scrollDown = (n: number) => {
      // SCROLL DOWN
      let nextScrollerPos =
        this.state.scrollerPos + 706 / (this.state.options.length - 5) * n;
      if (nextScrollerPos === Infinity) {
        nextScrollerPos = 0;
      } else if (nextScrollerPos > 706) {
        nextScrollerPos = 706;
      }
      let nextOptionsPos = this.state.optionsPos + 1 * n;
      if (nextOptionsPos > this.state.options.length - 5) {
        nextOptionsPos = this.state.options.length - 5;
      }
      this.setState({
        scrollerPos: nextScrollerPos,
        optionsPos: nextOptionsPos
      });
    };
    let scrollUp = (n: number) => {
      // SCROLL UP
      let nextScrollerPos =
        this.state.scrollerPos - 706 / (this.state.options.length - 5) * n;
      if (nextScrollerPos < 0) {
        nextScrollerPos = 0;
      }
      let nextOptionsPos = this.state.optionsPos - 1 * n;
      if (nextOptionsPos < 0) {
        nextOptionsPos = 0;
      }
      this.setState({
        scrollerPos: nextScrollerPos,
        optionsPos: nextOptionsPos
      });
    };
    if (e) {
      e.preventDefault();
      e.deltaY > 0 ? scrollDown(1) : scrollUp(1);
    } else if (delta) {
      delta > 0 ? scrollDown(4) : scrollUp(4);
    }
  }

  handleClick(e: MouseEvent) {
    let y = e.clientY - this.scrollBar.getBoundingClientRect().top;
    let scrollerPos =
      this.scroller.getBoundingClientRect().top -
      this.scrollBar.getBoundingClientRect().top;
    if (y < scrollerPos) {
      this.handleScroll(undefined, -1);
    } else if (y > scrollerPos + this.scroller.getBoundingClientRect().height) {
      this.handleScroll(undefined, 1);
    }
  }

  render() {
    const optionsSlice = this.state.options.slice(
      this.state.optionsPos,
      this.state.optionsPos + 5
    );
    const option1 = (
      <image
        xlinkHref={
          this.props.selectedOption === optionsSlice[0]
            ? optionHighlight
            : option
        }
        onClick={() => this.props.optionClick(optionsSlice[0])}
        onWheel={e => this.handleScroll(e.nativeEvent)}
        width="880"
        height="173"
        x="169"
        y="172"
      />
    );
    const option2 = (
      <image
        xlinkHref={
          this.props.selectedOption === optionsSlice[1]
            ? optionHighlight
            : option
        }
        onClick={() => this.props.optionClick(optionsSlice[1])}
        onWheel={e => this.handleScroll(e.nativeEvent)}
        width="880"
        height="173"
        x="169"
        y="344"
      />
    );
    const option3 = (
      <image
        xlinkHref={
          this.props.selectedOption === optionsSlice[2]
            ? optionHighlight
            : option
        }
        onClick={() => this.props.optionClick(optionsSlice[2])}
        onWheel={e => this.handleScroll(e.nativeEvent)}
        width="880"
        height="173"
        x="169"
        y="516"
      />
    );
    const option4 = (
      <image
        xlinkHref={
          this.props.selectedOption === optionsSlice[3]
            ? optionHighlight
            : option
        }
        onClick={() => this.props.optionClick(optionsSlice[3])}
        onWheel={e => this.handleScroll(e.nativeEvent)}
        width="880"
        height="173"
        x="169"
        y="688"
      />
    );
    const option5 = (
      <image
        xlinkHref={
          this.props.selectedOption === optionsSlice[4]
            ? optionHighlight
            : option
        }
        onClick={() => this.props.optionClick(optionsSlice[4])}
        onWheel={e => this.handleScroll(e.nativeEvent)}
        width="880"
        height="173"
        x="169"
        y="860"
      />
    );
    return (
      <Grid.Row centered={true}>
        <ItemContainer />
        <Grid.Column computer={5} tablet={10} mobile={12}>
          <svg
            className="game-tab no-select"
            viewBox="0 0 1282 1736"
            preserveAspectRatio="xMinYMin meet"
            ref={ref => (ref !== null ? this.props.setCurrentTab(ref) : null)}
            onContextMenu={e => e.preventDefault()}
            onMouseMove={e => this.props.mouseMove(e.nativeEvent)}
          >
            <image
              xlinkHref={border}
              width="964"
              height="1063"
              x="159"
              y="75"
            />
            <Tooltip
              trigger={option1}
              x={this.props.cursorX + 40}
              y={this.props.cursorY}
            >
              <CraftOptionTooltip
                types={optionsSlice[0].itemTypes}
                error={checkAvailability(this.props.item, optionsSlice[0])}
              />
            </Tooltip>
            <Tooltip
              trigger={option2}
              x={this.props.cursorX + 40}
              y={this.props.cursorY}
            >
              <CraftOptionTooltip
                types={optionsSlice[1].itemTypes}
                error={checkAvailability(this.props.item, optionsSlice[1])}
              />
            </Tooltip>
            <Tooltip
              trigger={option3}
              x={this.props.cursorX + 40}
              y={this.props.cursorY}
            >
              <CraftOptionTooltip
                types={optionsSlice[2].itemTypes}
                error={checkAvailability(this.props.item, optionsSlice[2])}
              />
            </Tooltip>
            <Tooltip
              trigger={option4}
              x={this.props.cursorX + 40}
              y={this.props.cursorY}
            >
              <CraftOptionTooltip
                types={optionsSlice[3].itemTypes}
                error={checkAvailability(this.props.item, optionsSlice[3])}
              />
            </Tooltip>
            <Tooltip
              trigger={option5}
              x={this.props.cursorX + 40}
              y={this.props.cursorY}
            >
              <CraftOptionTooltip
                types={optionsSlice[4].itemTypes}
                error={checkAvailability(this.props.item, optionsSlice[4])}
              />
            </Tooltip>
            <image
              xlinkHref={scrollBar}
              ref={ref => {
                this.scrollBar = ref as SVGImageElement;
              }}
              onClick={e => this.handleClick(e.nativeEvent)}
              onWheel={e => this.handleScroll(e.nativeEvent)}
              width="63"
              height="864"
              x="1049"
              y="172"
            />
            <image
              xlinkHref={scroller}
              ref={ref => {
                this.scroller = ref as SVGImageElement;
              }}
              onClick={e => this.handleClick(e.nativeEvent)}
              onWheel={e => this.handleScroll(e.nativeEvent)}
              transform={'translate(0, ' + this.state.scrollerPos + ')'}
              width="33"
              height="84"
              x="1065"
              y="210"
            />
            <image
              xlinkHref={titleBar}
              className="no-pointer-events"
              width="944"
              height="190"
              x="169"
              y="0"
            />
            <image
              xlinkHref={closeBtn}
              width="60"
              height="60"
              x="1037"
              y="100"
            />
            <image
              xlinkHref={background}
              className="no-pointer-events"
              width="944"
              height="692"
              x="169"
              y="1035"
            />
            <GenericButton
              x={200}
              y={1250}
              width={240}
              height={100}
              text={'Haku'}
              onClick={() => this.handleChangeMaster('HAKU')}
            />
            <GenericButton
              x={200}
              y={1360}
              width={240}
              height={100}
              text={'Elreon'}
              onClick={() => this.handleChangeMaster('ELREON')}
            />
            <GenericButton
              x={200}
              y={1470}
              width={240}
              height={100}
              text={'Catarina'}
              onClick={() => this.handleChangeMaster('CATARINA')}
            />
            <GenericButton
              x={200}
              y={1580}
              width={240}
              height={100}
              text={'Vagan'}
              onClick={() => this.handleChangeMaster('VAGAN')}
            />
            <GenericButton
              x={842}
              y={1300}
              width={240}
              height={100}
              text={'Tora'}
              onClick={() => this.handleChangeMaster('TORA')}
            />
            <GenericButton
              x={842}
              y={1410}
              width={240}
              height={100}
              text={'Leo'}
              onClick={() => this.handleChangeMaster('LEO')}
            />
            <GenericButton
              x={842}
              y={1520}
              width={240}
              height={100}
              text={'Vorici'}
              onClick={() => this.handleChangeMaster('VORICI')}
            />
            <CraftButton
              item={this.props.item}
              selectedOption={this.props.selectedOption}
              onClick={this.props.craftClick}
              disabled={
                _.includes(optionsSlice, this.props.selectedOption)
                  ? false
                  : true
              }
            />
            <CraftOption
              option={optionsSlice[0]}
              available={
                checkAvailability(this.props.item, optionsSlice[0]) === 0
              }
              x={169}
              y={172}
            />
            <CraftOption
              option={optionsSlice[1]}
              available={
                checkAvailability(this.props.item, optionsSlice[1]) === 0
              }
              x={169}
              y={344}
            />
            <CraftOption
              option={optionsSlice[2]}
              available={
                checkAvailability(this.props.item, optionsSlice[2]) === 0
              }
              x={169}
              y={516}
            />
            <CraftOption
              option={optionsSlice[3]}
              available={
                checkAvailability(this.props.item, optionsSlice[3]) === 0
              }
              x={169}
              y={688}
            />
            <CraftOption
              option={optionsSlice[4]}
              available={
                checkAvailability(this.props.item, optionsSlice[4]) === 0
              }
              x={169}
              y={860}
            />
            <ItemRect
              x={537}
              y={1084}
              width={212}
              height={418}
              xlinkHref={'https://' + this.props.itemArt}
              onClick={() => ({ type: '', payload: false })}
              onMouseEnter={this.props.itemRectMouseEnter}
              onMouseLeave={this.props.itemRectMouseLeave}
              setItemRect={this.props.setItemRect}
              craftingTab={true}
            />
            <ItemSockets
              x={537}
              y={1084}
              width={212}
              height={418}
              itemSockets={this.props.itemSockets}
              itemLinks={this.props.itemLinks}
              vertical={this.props.verticalSockets}
              craftingTab={true}
            />
          </svg>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default CraftingTab;
