import * as React from 'react';
import ItemContainer from '../containers/ItemContainer';
import TabRect from './TabRect';
import ItemRect from './ItemRect';
import { Grid } from 'semantic-ui-react';
const background = require('../assets/currencytab.png');

interface CurrencyTabProps {
  count: { [key: string]: number };
  selected: string | undefined;
  itemArt: string;
  orbClick: (orb: string) => { type: string; payload: string };
  itemClick: (e: React.MouseEvent<SVGRectElement>) => { type: string; payload: boolean };
  mouseMove: (e: React.MouseEvent<SVGSVGElement>) => { type: string; payload: { x: number, y: number} };
  mouseLeave: () => { type: string; };
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
          <ItemContainer />
          <svg
            className="game-tab"
            viewBox="0 0 1282 1282"
            preserveAspectRatio="xMinYMin meet"
            onMouseMove={(e: React.MouseEvent<SVGSVGElement>) => this.props.mouseMove(e)}
            onMouseLeave={() => this.props.mouseLeave()}
          >
            <image xlinkHref={background} height="1282" width="1282" />
            <TabRect
              x={679}
              y={151}
              count={this.props.count.whetstone}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyWeaponQuality.png"
              onClick={() => this.props.orbClick('WHETSTONE')}
            />
            <TabRect
              x={796}
              y={151}
              count={this.props.count.armorScrap}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyArmourQuality.png"
              onClick={() => this.props.orbClick('ARMORSCRAP')}
            />
            <TabRect
              x={47}
              y={307}
              count={this.props.count.transmute}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeToMagic.png"
              onClick={() => this.props.orbClick('TRANSMUTE')}
            />
            <TabRect
              x={165}
              y={307}
              count={this.props.count.alteration}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollMagic.png"
              onClick={() => this.props.orbClick('ALTERATION')}
            />
            <TabRect
              x={282}
              y={307}
              count={this.props.count.annulment}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/AnnullOrb.png"
              onClick={() => this.props.orbClick('ANNULMENT')}
            />
            <TabRect
              x={539}
              y={307}
              count={this.props.count.exalted}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyAddModToRare.png"
              onClick={() => this.props.orbClick('EXALTED')}
            />
            <TabRect
              x={796}
              y={307}
              count={this.props.count.regal}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeMagicToRare.png"
              onClick={() => this.props.orbClick('REGAL')}
            />
            <TabRect
              x={914}
              y={307}
              count={this.props.count.alchemy}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeToRare.png"
              onClick={() => this.props.orbClick('ALCHEMY')}
            />
            <TabRect
              x={1031}
              y={307}
              count={this.props.count.chaos}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png"
              onClick={() => this.props.orbClick('CHAOS')}
            />
            <TabRect
              x={1148}
              y={307}
              count={this.props.count.blessed}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyImplicitMod.png"
              onClick={() => this.props.orbClick('BLESSED')}
            />
            <TabRect
              x={400}
              y={417}
              count={this.props.count.augment}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyAddModToMagic.png"
              onClick={() => this.props.orbClick('AUGMENT')}
            />
            <TabRect
              x={1148}
              y={417}
              count={this.props.count.divine}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyModValues.png"
              onClick={() => this.props.orbClick('DIVINE')}
            />
            <TabRect
              x={164}
              y={597}
              count={this.props.count.jeweller}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketNumbers.png"
              onClick={() => this.props.orbClick('JEWELLER')}
            />
            <TabRect
              x={282}
              y={597}
              count={this.props.count.fusing}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketLinks.png"
              onClick={() => this.props.orbClick('FUSING')}
            />
            <TabRect
              x={400}
              y={597}
              count={this.props.count.chromatic}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketColours.png"
              onClick={() => this.props.orbClick('CHROMATIC')}
            />
            <TabRect
              x={796}
              y={597}
              count={this.props.count.scouring}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyConvertToNormal.png"
              onClick={() => this.props.orbClick('SCOURING')}
            />
            <TabRect
              x={251}
              y={972}
              count={this.props.count.eternal}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyImprintOrb.png"
              onClick={() => this.props.orbClick('ETERNAL')}
            />
            <TabRect
              x={251}
              y={1088}
              count={this.props.count.imprint}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyImprint.png"
              onClick={() => this.props.orbClick('IMPRINT')}
            />
            <ItemRect
              x={565}
              y={561}
              width={166}
              height={340}
              xlinkHref={'https://' + this.props.itemArt}
              onClick={this.props.itemClick}
            />
          </svg>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default CurrencyTab;
