import * as React from 'react';
import ItemContainer from '../containers/ItemContainer';
import TabRect from './TabRect';
import ItemRect from './ItemRect';
import ItemSockets from './ItemSockets';
import { Grid } from 'semantic-ui-react';
const background = require('../assets/currencytab.png');

interface CurrencyTabProps {
  currentTab: string;
  count: { [key: string]: number };
  itemSockets: string;
  itemLinks: string;
  verticalSockets: boolean;
  itemArt: string;
  orbClick: (orb: string) => { type: string; payload: string };
  itemClick: (
    e: React.MouseEvent<SVGRectElement>
  ) => { type: string; payload: boolean };
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

interface CurrencyTabState {
  cursorX: number;
  cursorY: number;
}

class CurrencyTab extends React.Component<CurrencyTabProps, CurrencyTabState> {
  constructor(props: CurrencyTabProps) {
    super(props);
    this.state = { cursorX: 0, cursorY: 0 };
  }

  render() {
    return (
      <Grid.Row centered={true}>
        <ItemContainer />
        <Grid.Column computer={6} tablet={10} mobile={12}>
          <svg
            className="game-tab no-select"
            viewBox="0 0 1282 1282"
            preserveAspectRatio="xMinYMin meet"
            onMouseMove={(e: React.MouseEvent<SVGSVGElement>) =>
              this.props.mouseMove(e)}
            onMouseLeave={() => this.props.mouseLeave()}
            ref={ref => (ref !== null ? this.props.setCurrentTab(ref) : null)}
            onContextMenu={e => e.preventDefault()}
          >
            <image xlinkHref={background} height="1282" width="1282" />
            <TabRect
              x={679}
              y={151}
              count={this.props.count.whetstone}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyWeaponQuality.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('WHETSTONE');
              }}
            />
            <TabRect
              x={796}
              y={151}
              count={this.props.count.armorScrap}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyArmourQuality.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('ARMORSCRAP');
              }}
            />
            <TabRect
              x={47}
              y={307}
              count={this.props.count.transmute}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeToMagic.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('TRANSMUTE');
              }}
            />
            <TabRect
              x={165}
              y={307}
              count={this.props.count.alteration}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollMagic.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('ALTERATION');
              }}
            />
            <TabRect
              x={282}
              y={307}
              count={this.props.count.annulment}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/AnnullOrb.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('ANNULMENT');
              }}
            />
            <TabRect
              x={539}
              y={307}
              count={this.props.count.exalted}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyAddModToRare.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('EXALTED');
              }}
            />
            <TabRect
              x={796}
              y={307}
              count={this.props.count.regal}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeMagicToRare.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('REGAL');
              }}
            />
            <TabRect
              x={914}
              y={307}
              count={this.props.count.alchemy}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeToRare.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('ALCHEMY');
              }}
            />
            <TabRect
              x={1031}
              y={307}
              count={this.props.count.chaos}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('CHAOS');
              }}
            />
            <TabRect
              x={1148}
              y={307}
              count={this.props.count.blessed}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyImplicitMod.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('BLESSED');
              }}
            />
            <TabRect
              x={400}
              y={417}
              count={this.props.count.augment}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyAddModToMagic.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('AUGMENT');
              }}
            />
            <TabRect
              x={1148}
              y={417}
              count={this.props.count.divine}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyModValues.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('DIVINE');
              }}
            />
            <TabRect
              x={164}
              y={597}
              count={this.props.count.jeweller}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketNumbers.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('JEWELLER');
              }}
            />
            <TabRect
              x={282}
              y={597}
              count={this.props.count.fusing}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketLinks.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('FUSING');
              }}
            />
            <TabRect
              x={400}
              y={597}
              count={this.props.count.chromatic}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketColours.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('CHROMATIC');
              }}
            />
            <TabRect
              x={796}
              y={597}
              count={this.props.count.scouring}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyConvertToNormal.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('SCOURING');
              }}
            />
            <TabRect
              x={914}
              y={597}
              count={0}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyPassiveSkillRefund.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('REGRET');
              }}
            />
            <TabRect
              x={1031}
              y={597}
              count={this.props.count.vaal}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyVaal.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('VAAL');
              }}
            />
            <TabRect
              x={251}
              y={972}
              count={this.props.count.eternal}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyImprintOrb.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('ETERNAL');
              }}
            />
            <TabRect
              x={251}
              y={1088}
              count={this.props.count.imprint}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyImprint.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('IMPRINT');
              }}
            />
            <ItemRect
              x={565}
              y={561}
              width={166}
              height={340}
              xlinkHref={'https://' + this.props.itemArt}
              onClick={this.props.itemClick}
              onMouseEnter={this.props.itemRectMouseEnter}
              onMouseLeave={this.props.itemRectMouseLeave}
              setItemRect={this.props.setItemRect}
            />
            <ItemSockets
              x={565}
              y={561}
              width={166}
              height={340}
              itemSockets={this.props.itemSockets}
              itemLinks={this.props.itemLinks}
              vertical={this.props.verticalSockets}
            />
          </svg>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default CurrencyTab;
