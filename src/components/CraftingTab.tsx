import * as React from 'react';
import * as _ from 'lodash';
import { CraftingOption } from '../reducers/craftingOptionReducer';
import ItemRect from '../components/ItemRect';
import ItemSockets from '../components/ItemSockets';
import { Grid } from 'semantic-ui-react';
import CraftOption from '../components/CraftOption';
import CraftButton from '../components/CraftButton';
import GenericButton from '../components/GenericButton';
import Item from '../utils/item';
import { checkAvailability } from '../utils/itemFunctions';
const background = require('../assets/craftingbench/craftingbench.png');
const border = require('../assets/craftingbench/craftingbenchborder.png');
const titleBar = require('../assets/craftingbench/craftingtitlebar.png');
const closeBtn = require('../assets/craftingbench/craftclosebutton.png');
const scrollBar = require('../assets/craftingbench/scrollbar.png');
const scroller = require('../assets/craftingbench/scroller.png');

interface CraftingTabProps {
  item: Item;
  itemSockets: string;
  itemLinks: string;
  verticalSockets: boolean;
  itemArt: string;
  mouseMove: (
    e: MouseEvent
  ) => { type: string; payload: { x: number; y: number } };
  mouseLeave: () => { type: string; payload: {} };
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
  anchorItemBox: boolean;
}

interface CraftingTabState {
  scrollerPos: number;
  optionsPos: number;
  options: CraftingOption[];
  optionsSlice: CraftingOption[];
}

class CraftingTab extends React.Component<CraftingTabProps, CraftingTabState> {
  private scroller: SVGImageElement;
  private scrollBar: SVGImageElement;
  constructor(props: CraftingTabProps) {
    super(props);
    this.state = {
      scrollerPos: 0,
      optionsPos: 0,
      options: this.props.craftingOptions.haku,
      optionsSlice: this.props.craftingOptions.haku.slice(0, 5)
    };
  }

  handleChangeMaster(master: string) {
    this.props.optionClick(undefined);
    switch (master) {
      case 'HAKU':
        this.setState({
          scrollerPos: 0,
          optionsPos: 0,
          options: this.props.craftingOptions.haku,
          optionsSlice: this.props.craftingOptions.haku.slice(0, 5)
        });
        break;
      case 'ELREON':
        this.setState({
          scrollerPos: 0,
          optionsPos: 0,
          options: this.props.craftingOptions.elreon,
          optionsSlice: this.props.craftingOptions.elreon.slice(0, 5)
        });
        break;
      case 'CATARINA':
        this.setState({
          scrollerPos: 0,
          optionsPos: 0,
          options: this.props.craftingOptions.catarina,
          optionsSlice: this.props.craftingOptions.catarina.slice(0, 5)
        });
        break;
      case 'VAGAN':
        this.setState({
          scrollerPos: 0,
          optionsPos: 0,
          options: this.props.craftingOptions.vagan,
          optionsSlice: this.props.craftingOptions.vagan.slice(0, 5)
        });
        break;
      case 'TORA':
        this.setState({
          scrollerPos: 0,
          optionsPos: 0,
          options: this.props.craftingOptions.tora,
          optionsSlice: this.props.craftingOptions.tora.slice(0, 5)
        });
        break;
      case 'LEO':
        this.setState({
          scrollerPos: 0,
          optionsPos: 0,
          options: this.props.craftingOptions.leo,
          optionsSlice: this.props.craftingOptions.leo.slice(0, 5)
        });
        break;
      case 'VORICI':
        this.setState({
          scrollerPos: 0,
          optionsPos: 0,
          options: this.props.craftingOptions.vorici,
          optionsSlice: this.props.craftingOptions.vorici.slice(0, 5)
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
        optionsPos: nextOptionsPos,
        optionsSlice: this.state.options.slice(
          nextOptionsPos,
          nextOptionsPos + 5
        )
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
        optionsPos: nextOptionsPos,
        optionsSlice: this.state.options.slice(
          nextOptionsPos,
          nextOptionsPos + 5
        )
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
    return (
      <Grid.Row centered={true}>
        <Grid.Column computer={5} tablet={10} mobile={12}>
          <svg
            className="game-tab no-select"
            viewBox="0 0 1282 1736"
            preserveAspectRatio="xMinYMin meet"
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
            <CraftOption
              option={this.state.optionsSlice[0]}
              selectedOption={this.props.selectedOption}
              available={checkAvailability(
                this.props.item,
                this.state.optionsSlice[0]
              )}
              optionClick={this.props.optionClick}
              handleScroll={e => this.handleScroll(e)}
              x={169}
              y={172}
            />
            <CraftOption
              option={this.state.optionsSlice[1]}
              selectedOption={this.props.selectedOption}
              available={checkAvailability(
                this.props.item,
                this.state.optionsSlice[1]
              )}
              optionClick={this.props.optionClick}
              handleScroll={e => this.handleScroll(e)}
              x={169}
              y={344}
            />
            <CraftOption
              option={this.state.optionsSlice[2]}
              selectedOption={this.props.selectedOption}
              available={checkAvailability(
                this.props.item,
                this.state.optionsSlice[2]
              )}
              optionClick={this.props.optionClick}
              handleScroll={e => this.handleScroll(e)}
              x={169}
              y={516}
            />
            <CraftOption
              option={this.state.optionsSlice[3]}
              selectedOption={this.props.selectedOption}
              available={checkAvailability(
                this.props.item,
                this.state.optionsSlice[3]
              )}
              optionClick={this.props.optionClick}
              handleScroll={e => this.handleScroll(e)}
              x={169}
              y={688}
            />
            <CraftOption
              option={this.state.optionsSlice[4]}
              selectedOption={this.props.selectedOption}
              available={checkAvailability(
                this.props.item,
                this.state.optionsSlice[4]
              )}
              optionClick={this.props.optionClick}
              handleScroll={e => this.handleScroll(e)}
              x={169}
              y={860}
            />
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
                _.includes(this.state.optionsSlice, this.props.selectedOption)
                  ? false
                  : true
              }
            />
            <ItemRect
              x={537}
              y={1084}
              width={212}
              height={418}
              xlinkHref={'https://' + this.props.itemArt}
              onClick={() => ({ type: '', payload: false })}
              alwaysOn={this.props.anchorItemBox}
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
