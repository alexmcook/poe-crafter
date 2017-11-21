import * as React from 'react';
import TabRect from './TabRect';
import ItemRect from './ItemRect';
import ItemSockets from './ItemSockets';
import { Grid } from 'semantic-ui-react';
const background = require('../assets/currencytab.png');

interface CurrencyTabProps {
  count: { [key: string]: number };
  itemSockets: string;
  itemLinks: string;
  verticalSockets: boolean;
  itemArt: string;
  orbClick: (orb: string) => { type: string; payload: string };
  itemClick: (e: MouseEvent) => { type: string; payload: boolean };
  mouseMove: (
    e: MouseEvent
  ) => { type: string; payload: { x: number; y: number } };
  mouseLeave: () => { type: string; payload: {} };
  anchorItemBox: boolean;
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
        <Grid.Column computer={6} tablet={10} mobile={12}>
          <svg
            className="game-tab no-select"
            viewBox="0 0 1282 1282"
            preserveAspectRatio="xMinYMin meet"
            onMouseMove={e => this.props.mouseMove(e.nativeEvent)}
            onMouseLeave={() => this.props.mouseLeave()}
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
              name="Blacksmith's Whetstone"
              currencyText="Improves the quality of a weapon"
              stackSize={20}
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
              name="Armourer's Scrap"
              currencyText="Improves the quality of an armour"
              stackSize={40}
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
              name="Orb of Transmutation"
              currencyText="Upgrades a normal item to a magic item"
              stackSize={40}
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
              name="Orb of Alteration"
              currencyText="Reforges a magic item with new random properties"
              stackSize={20}
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
              name="Orb of Annulment"
              currencyText="Removes a random property from an item"
              stackSize={20}
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
              name="Exalted Orb"
              currencyText="Enchants a rare item with a new random property"
              stackSize={10}
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
              name="Regal Orb"
              currencyText="Upgrades a magic item to a rare item"
              stackSize={10}
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
              name="Orb of Alchemy"
              currencyText="Upgrades a normal item to a rare item"
              stackSize={10}
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
              name="Chaos Orb"
              currencyText="Reforges a rare item with new random properties"
              stackSize={10}
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
              name="Blessed Orb"
              currencyText="Randomises the numeric values of the implicit properties of an item"
              stackSize={20}
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
              name="Orb of Augmentation"
              currencyText="Enchants a magic item with a new random property"
              stackSize={30}
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
              name="Divine Orb"
              currencyText="Randomises the numeric values of the random properties on an item"
              stackSize={10}
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
              name="Jeweller's Orb"
              currencyText="Reforges the number of sockets on an item"
              stackSize={20}
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
              name="Orb of Fusing"
              currencyText="Reforges the links between sockets on an item"
              stackSize={20}
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
              name="Chromatic Orb"
              currencyText="Reforges the colour of sockets on an item"
              stackSize={20}
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
              name="Orb of Scouring"
              currencyText="Removes all properties from an item"
              stackSize={30}
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
              name="Orb of Regret"
              currencyText="Undo last action"
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
              name="Vaal Orb"
              currencyText="Corrupts an item, modifying it unpredictably"
              stackSize={10}
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
              name="Eternal Orb"
              currencyText="Creates an imprint of an item for later restoration"
              stackSize={10}
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
              name="Imprint"
              currencyText="Restores an imprinted item onto the original"
            />
            <ItemRect
              x={565}
              y={561}
              width={166}
              height={340}
              xlinkHref={'https://' + this.props.itemArt}
              onClick={this.props.itemClick}
              alwaysOn={this.props.anchorItemBox}
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
