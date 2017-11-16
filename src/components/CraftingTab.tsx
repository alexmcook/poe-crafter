import * as React from 'react';
import ItemRect from '../components/ItemRect';
import ItemSockets from '../components/ItemSockets';
import ItemContainer from '../containers/ItemContainer';
import { Grid } from 'semantic-ui-react';
const background = require('../assets/craftingbench/craftingbench.png');
const border = require('../assets/craftingbench/craftingbenchborder.png');
const titleBar = require('../assets/craftingbench/craftingtitlebar.png');
const closeBtn = require('../assets/craftingbench/craftclosebutton.png');
const option = require('../assets/craftingbench/craftingbenchslot.png');
const optionHighlight = require('../assets/craftingbench/craftingbenchslothighlight.png');
const scrollBar = require('../assets/craftingbench/scrollbar.png');
const scroller = require('../assets/craftingbench/scroller.png');
const craftBtn = require('../assets/craftingbench/craftbutton.png');

interface CraftingTabProps {
  currentTab: string;
  itemSockets: string;
  itemLinks: string;
  verticalSockets: boolean;
  itemArt: string;
  mouseMove: (
    e: React.MouseEvent<SVGSVGElement>
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
}

interface CraftingTabState {
  cursorX: number;
  cursorY: number;
}

class CraftingTab extends React.Component<CraftingTabProps, CraftingTabState> {
  constructor(props: CraftingTabProps) {
    super(props);
    this.state = { cursorX: 0, cursorY: 0 };
  }

  render() {
    return (
      this.props.currentTab === 'Crafting' && (
        <Grid.Row centered={true}>
          <ItemContainer />
          <Grid.Column computer={5} tablet={10} mobile={12}>
            <svg
              className="game-tab no-select"
              viewBox="0 0 1282 1736"
              preserveAspectRatio="xMinYMin meet"
              ref={ref => (ref !== null ? this.props.setCurrentTab(ref) : null)}
            >
              <rect fill="#808080" opacity="0.3" width="1282" height="1750" />
              <image xlinkHref={border} width="964" height="1063" x="159" y="75" />
              <image xlinkHref={optionHighlight} width="880" height="173" x="169" y="172" />
              <image xlinkHref={option} width="880" height="173" x="169" y="344" />
              <image xlinkHref={option} width="880" height="173" x="169" y="516" />
              <image xlinkHref={option} width="880" height="173" x="169" y="688" />
              <image xlinkHref={option} width="880" height="173" x="169" y="860" />
              <image xlinkHref={scrollBar} width="63" height="864" x="1049" y="172" />
              <image xlinkHref={scroller} width="33" height="84" x="1065" y="210" />
              <image xlinkHref={titleBar} className="no-pointer-events" width="944" height="190" x="169" y="0" />
              <image xlinkHref={closeBtn} width="60" height="60" x="1037" y="100" />
              <image xlinkHref={background} className="no-pointer-events" width="944" height="692" x="169" y="1035" />
              <image xlinkHref={craftBtn} width="192" height="78" x="547" y="1636" />

              <text className="crafting-text no-pointer-events" x="259" y="236">Option 1</text>
              <text className="crafting-text no-pointer-events" x="259" y="408">Option 1</text>
              <text className="crafting-text no-pointer-events" x="259" y="580">Option 1</text>
              <text className="crafting-text no-pointer-events" x="259" y="752">Option 1</text>
              <text className="crafting-text no-pointer-events" x="259" y="924">Option 1</text>
              <ItemRect
                x={537}
                y={1084}
                width={212}
                height={418}
                xlinkHref={'https://' + this.props.itemArt}
                onClick={() => ({ type: '', payload: false})}
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
      )
    );
  }
}

export default CraftingTab;
