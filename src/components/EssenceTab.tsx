import * as React from 'react';
import ItemContainer from '../containers/ItemContainer';
import TabRect from './TabRect';
import ItemRect from './ItemRect';
import ItemSockets from './ItemSockets';
import { Grid } from 'semantic-ui-react';
const background = require('../assets/essencetab.png');

interface EssenceTabProps {
  currentTab: string;
  count: { [key: string]: number };
  essenceCount: { [key: string]: { [key: number]: number } };
  itemSockets: string;
  itemLinks: string;
  verticalSockets: boolean;
  itemArt: string;
  orbClick: (orb: string) => { type: string; payload: string };
  essenceClick: (
    essence: string,
    tier: number
  ) => { type: string; payload: { essence: string; tier: number } };
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

interface EssenceTabState {
  cursorX: number;
  cursorY: number;
}

class EssenceTab extends React.Component<EssenceTabProps, EssenceTabState> {
  constructor(props: EssenceTabProps) {
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
            //#region essence greed
            <TabRect
              x={68}
              y={59}
              count={this.props.essenceCount.greed[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Greed7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('GREED', 7);
              }}
              name="Whipsering Essence of Greed"
            />
            <TabRect
              x={167}
              y={59}
              count={this.props.essenceCount.greed[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Greed6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('GREED', 6);
              }}
              name="Muttering Essence of Greed"
            />
            <TabRect
              x={265}
              y={59}
              count={this.props.essenceCount.greed[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Greed5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('GREED', 5);
              }}
              name="Weeping Essence of Greed"
            />
            <TabRect
              x={364}
              y={59}
              count={this.props.essenceCount.greed[4]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Greed4.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('GREED', 4);
              }}
              name="Wailing Essence of Greed"
            />
            <TabRect
              x={462}
              y={59}
              count={this.props.essenceCount.greed[3]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Greed3.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('GREED', 3);
              }}
              name="Screaming Essence of Greed"
            />
            <TabRect
              x={561}
              y={59}
              count={this.props.essenceCount.greed[2]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Greed2.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('GREED', 2);
              }}
              name="Shrieking Essence of Greed"
            />
            <TabRect
              x={660}
              y={59}
              count={this.props.essenceCount.greed[1]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Greed1.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('GREED', 1);
              }}
              name="Deafening Essence of Greed"
            />
            //#endregion //#region essence contempt
            <TabRect
              x={68}
              y={157}
              count={this.props.essenceCount.contempt[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Contempt7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('CONTEMPT', 7);
              }}
              name="Whipsering Essence of Contempt"
            />
            <TabRect
              x={167}
              y={157}
              count={this.props.essenceCount.contempt[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Contempt6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('CONTEMPT', 6);
              }}
              name="Muttering Essence of Contempt"
            />
            <TabRect
              x={265}
              y={157}
              count={this.props.essenceCount.contempt[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Contempt5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('CONTEMPT', 5);
              }}
              name="Weeping Essence of Contempt"
            />
            <TabRect
              x={364}
              y={157}
              count={this.props.essenceCount.contempt[4]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Contempt4.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('CONTEMPT', 4);
              }}
              name="Wailing Essence of Contempt"
            />
            <TabRect
              x={462}
              y={157}
              count={this.props.essenceCount.contempt[3]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Contempt3.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('CONTEMPT', 3);
              }}
              name="Screaming Essence of Contempt"
            />
            <TabRect
              x={561}
              y={157}
              count={this.props.essenceCount.contempt[2]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Contempt2.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('CONTEMPT', 2);
              }}
              name="Shrieking Essence of Contempt"
            />
            <TabRect
              x={660}
              y={157}
              count={this.props.essenceCount.contempt[1]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Contempt1.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('CONTEMPT', 1);
              }}
              name="Deafening Essence of Contempt"
            />
            //#endregion //#region essence hatred
            <TabRect
              x={68}
              y={255}
              count={this.props.essenceCount.hatred[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Hatred7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('HATRED', 7);
              }}
              name="Whipsering Essence of Hatred"
            />
            <TabRect
              x={167}
              y={255}
              count={this.props.essenceCount.hatred[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Hatred6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('HATRED', 6);
              }}
              name="Muttering Essence of Hatred"
            />
            <TabRect
              x={265}
              y={255}
              count={this.props.essenceCount.hatred[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Hatred5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('HATRED', 5);
              }}
              name="Weeping Essence of Hatred"
            />
            <TabRect
              x={364}
              y={255}
              count={this.props.essenceCount.hatred[4]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Hatred4.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('HATRED', 4);
              }}
              name="Wailing Essence of Hatred"
            />
            <TabRect
              x={462}
              y={255}
              count={this.props.essenceCount.hatred[3]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Hatred3.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('HATRED', 3);
              }}
              name="Screaming Essence of Hatred"
            />
            <TabRect
              x={561}
              y={255}
              count={this.props.essenceCount.hatred[2]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Hatred2.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('HATRED', 2);
              }}
              name="Shrieking Essence of Hatred"
            />
            <TabRect
              x={660}
              y={255}
              count={this.props.essenceCount.hatred[1]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Hatred1.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('HATRED', 1);
              }}
              name="Deafening Essence of Hatred"
            />
            //#endregion //#region essence woe
            <TabRect
              x={68}
              y={353}
              count={this.props.essenceCount.woe[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Woe7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('WOE', 7);
              }}
              name="Whipsering Essence of Woe"
            />
            <TabRect
              x={167}
              y={353}
              count={this.props.essenceCount.woe[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Woe6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('WOE', 6);
              }}
              name="Muttering Essence of Woe"
            />
            <TabRect
              x={265}
              y={353}
              count={this.props.essenceCount.woe[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Woe5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('WOE', 5);
              }}
              name="Weeping Essence of Woe"
            />
            <TabRect
              x={364}
              y={353}
              count={this.props.essenceCount.woe[4]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Woe4.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('WOE', 4);
              }}
              name="Wailing Essence of Woe"
            />
            <TabRect
              x={462}
              y={353}
              count={this.props.essenceCount.woe[3]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Woe3.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('WOE', 3);
              }}
              name="Screaming Essence of Woe"
            />
            <TabRect
              x={561}
              y={353}
              count={this.props.essenceCount.woe[2]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Woe2.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('WOE', 2);
              }}
              name="Shrieking Essence of Woe"
            />
            <TabRect
              x={660}
              y={353}
              count={this.props.essenceCount.woe[1]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Woe1.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('WOE', 1);
              }}
              name="Deafening Essence of Woe"
            />
            //#endregion //#region essence fear
            <TabRect
              x={68}
              y={452}
              count={this.props.essenceCount.fear[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Fear7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('FEAR', 7);
              }}
              name="Muttering Essence of Fear"
            />
            <TabRect
              x={167}
              y={452}
              count={this.props.essenceCount.fear[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Fear6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('FEAR', 6);
              }}
              name="Weeping Essence of Fear"
            />
            <TabRect
              x={265}
              y={452}
              count={this.props.essenceCount.fear[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Fear5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('FEAR', 5);
              }}
              name="Wailing Essence of Fear"
            />
            <TabRect
              x={364}
              y={452}
              count={this.props.essenceCount.fear[4]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Fear4.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('FEAR', 4);
              }}
              name="Screaming Essence of Fear"
            />
            <TabRect
              x={462}
              y={452}
              count={this.props.essenceCount.fear[3]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Fear3.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('FEAR', 3);
              }}
              name="Shrieking Essence of Fear"
            />
            <TabRect
              x={561}
              y={452}
              count={this.props.essenceCount.fear[2]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Fear2.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('FEAR', 2);
              }}
              name="Deafening Essence of Fear"
            />
            //#endregion //#region essence anger
            <TabRect
              x={68}
              y={550}
              count={this.props.essenceCount.anger[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Anger7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ANGER', 7);
              }}
              name="Muttering Essence of Anger"
            />
            <TabRect
              x={167}
              y={550}
              count={this.props.essenceCount.anger[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Anger6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ANGER', 6);
              }}
              name="Weeping Essence of Anger"
            />
            <TabRect
              x={265}
              y={550}
              count={this.props.essenceCount.anger[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Anger5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ANGER', 5);
              }}
              name="Wailing Essence of Anger"
            />
            <TabRect
              x={364}
              y={550}
              count={this.props.essenceCount.anger[4]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Anger4.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ANGER', 4);
              }}
              name="Screaming Essence of Anger"
            />
            <TabRect
              x={462}
              y={550}
              count={this.props.essenceCount.anger[3]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Anger3.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ANGER', 3);
              }}
              name="Shrieking Essence of Anger"
            />
            <TabRect
              x={561}
              y={550}
              count={this.props.essenceCount.anger[2]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Anger2.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ANGER', 2);
              }}
              name="Deafening Essence of Anger"
            />
            //#endregion //#region essence torment
            <TabRect
              x={68}
              y={649}
              count={this.props.essenceCount.torment[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Torment7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('TORMENT', 7);
              }}
              name="Muttering Essence of Torment"
            />
            <TabRect
              x={167}
              y={649}
              count={this.props.essenceCount.torment[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Torment6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('TORMENT', 6);
              }}
              name="Weeping Essence of Torment"
            />
            <TabRect
              x={265}
              y={649}
              count={this.props.essenceCount.torment[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Torment5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('TORMENT', 5);
              }}
              name="Wailing Essence of Torment"
            />
            <TabRect
              x={364}
              y={649}
              count={this.props.essenceCount.torment[4]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Torment4.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('TORMENT', 4);
              }}
              name="Screaming Essence of Torment"
            />
            <TabRect
              x={462}
              y={649}
              count={this.props.essenceCount.torment[3]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Torment3.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('TORMENT', 3);
              }}
              name="Shrieking Essence of Torment"
            />
            <TabRect
              x={561}
              y={649}
              count={this.props.essenceCount.torment[2]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Torment2.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('TORMENT', 2);
              }}
              name="Deafening Essence of Torment"
            />
            //#endregion //#region essence sorrow
            <TabRect
              x={68}
              y={748}
              count={this.props.essenceCount.sorrow[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Sorrow7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SORROW', 7);
              }}
              name="Muttering Essence of Sorrow"
            />
            <TabRect
              x={167}
              y={748}
              count={this.props.essenceCount.sorrow[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Sorrow6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SORROW', 6);
              }}
              name="Weeping Essence of Sorrow"
            />
            <TabRect
              x={265}
              y={748}
              count={this.props.essenceCount.sorrow[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Sorrow5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SORROW', 5);
              }}
              name="Wailing Essence of Sorrow"
            />
            <TabRect
              x={364}
              y={748}
              count={this.props.essenceCount.sorrow[4]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Sorrow4.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SORROW', 4);
              }}
              name="Screaming Essence of Sorrow"
            />
            <TabRect
              x={462}
              y={748}
              count={this.props.essenceCount.sorrow[3]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Sorrow3.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SORROW', 3);
              }}
              name="Shrieking Essence of Sorrow"
            />
            <TabRect
              x={561}
              y={748}
              count={this.props.essenceCount.sorrow[2]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Sorrow2.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SORROW', 2);
              }}
              name="Deafening Essence of Sorrow"
            />
            //#endregion //#region essence rage
            <TabRect
              x={68}
              y={846}
              count={this.props.essenceCount.rage[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Rage7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('RAGE', 7);
              }}
              name="Weeping Essence of Rage"
            />
            <TabRect
              x={167}
              y={846}
              count={this.props.essenceCount.rage[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Rage6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('RAGE', 6);
              }}
              name="Wailing Essence of Rage"
            />
            <TabRect
              x={265}
              y={846}
              count={this.props.essenceCount.rage[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Rage5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('RAGE', 5);
              }}
              name="Screaming Essence of Rage"
            />
            <TabRect
              x={364}
              y={846}
              count={this.props.essenceCount.rage[4]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Rage4.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('RAGE', 4);
              }}
              name="Shrieking Essence of Rage"
            />
            <TabRect
              x={462}
              y={846}
              count={this.props.essenceCount.rage[3]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Rage3.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('RAGE', 3);
              }}
              name="Deafening Essence of Rage"
            />
            //#endregion //#region essence suffering
            <TabRect
              x={68}
              y={944}
              count={this.props.essenceCount.suffering[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Suffering7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SUFFERING', 7);
              }}
              name="Weeping Essence of Suffering"
            />
            <TabRect
              x={167}
              y={944}
              count={this.props.essenceCount.suffering[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Suffering6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SUFFERING', 6);
              }}
              name="Wailing Essence of Suffering"
            />
            <TabRect
              x={265}
              y={944}
              count={this.props.essenceCount.suffering[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Suffering5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SUFFERING', 5);
              }}
              name="Screaming Essence of Suffering"
            />
            <TabRect
              x={364}
              y={944}
              count={this.props.essenceCount.suffering[4]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Suffering4.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SUFFERING', 4);
              }}
              name="Shrieking Essence of Suffering"
            />
            <TabRect
              x={462}
              y={944}
              count={this.props.essenceCount.suffering[3]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Suffering3.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SUFFERING', 3);
              }}
              name="Deafening Essence of Suffering"
            />
            //#endregion //#region essence wrath
            <TabRect
              x={68}
              y={1043}
              count={this.props.essenceCount.wrath[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Wrath7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('WRATH', 7);
              }}
              name="Weeping Essence of Wrath"
            />
            <TabRect
              x={167}
              y={1043}
              count={this.props.essenceCount.wrath[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Wrath6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('WRATH', 6);
              }}
              name="Wailing Essence of Wrath"
            />
            <TabRect
              x={265}
              y={1043}
              count={this.props.essenceCount.wrath[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Wrath5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('WRATH', 5);
              }}
              name="Screaming Essence of Wrath"
            />
            <TabRect
              x={364}
              y={1043}
              count={this.props.essenceCount.wrath[4]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Wrath4.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('WRATH', 4);
              }}
              name="Shrieking Essence of Wrath"
            />
            <TabRect
              x={462}
              y={1043}
              count={this.props.essenceCount.wrath[3]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Wrath3.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('WRATH', 3);
              }}
              name="Deafening Essence of Wrath"
            />
            //#endregion //#region essence doubt
            <TabRect
              x={68}
              y={1141}
              count={this.props.essenceCount.doubt[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Doubt7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('DOUBT', 7);
              }}
              name="Weeping Essence of Doubt"
            />
            <TabRect
              x={167}
              y={1141}
              count={this.props.essenceCount.doubt[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Doubt6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('DOUBT', 6);
              }}
              name="Wailing Essence of Doubt"
            />
            <TabRect
              x={265}
              y={1141}
              count={this.props.essenceCount.doubt[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Doubt5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('DOUBT', 5);
              }}
              name="Screaming Essence of Doubt"
            />
            <TabRect
              x={364}
              y={1141}
              count={this.props.essenceCount.doubt[4]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Doubt4.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('DOUBT', 4);
              }}
              name="Shrieking Essence of Doubt"
            />
            <TabRect
              x={462}
              y={1141}
              count={this.props.essenceCount.doubt[3]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Doubt3.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('DOUBT', 3);
              }}
              name="Deafening Essence of Doubt"
            />
            //#endregion //#region essence loathing
            <TabRect
              x={839}
              y={59}
              count={this.props.essenceCount.loathing[4]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Loathing4.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('LOATHING', 4);
              }}
              name="Wailing Essence of Loathing"
            />
            <TabRect
              x={937}
              y={59}
              count={this.props.essenceCount.loathing[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Loathing5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('LOATHING', 5);
              }}
              name="Screaming Essence of Loathing"
            />
            <TabRect
              x={1036}
              y={59}
              count={this.props.essenceCount.loathing[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Loathing6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('LOATHING', 6);
              }}
              name="Shrieking Essence of Loathing"
            />
            <TabRect
              x={1135}
              y={59}
              count={this.props.essenceCount.loathing[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Loathing7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('LOATHING', 7);
              }}
              name="Deafening Essence of Loathing"
            />
            //#endregion //#region essence zeal
            <TabRect
              x={839}
              y={157}
              count={this.props.essenceCount.zeal[4]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Zeal4.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ZEAL', 4);
              }}
              name="Wailing Essence of Zeal"
            />
            <TabRect
              x={937}
              y={157}
              count={this.props.essenceCount.zeal[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Zeal5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ZEAL', 5);
              }}
              name="Screaming Essence of Zeal"
            />
            <TabRect
              x={1036}
              y={157}
              count={this.props.essenceCount.zeal[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Zeal6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ZEAL', 6);
              }}
              name="Shrieking Essence of Zeal"
            />
            <TabRect
              x={1135}
              y={157}
              count={this.props.essenceCount.zeal[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Zeal7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ZEAL', 7);
              }}
              name="Deafening Essence of Zeal"
            />
            //#endregion //#region essence anguish
            <TabRect
              x={839}
              y={255}
              count={this.props.essenceCount.anguish[4]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Anguish4.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ANGUISH', 4);
              }}
              name="Wailing Essence of Anguish"
            />
            <TabRect
              x={937}
              y={255}
              count={this.props.essenceCount.anguish[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Anguish5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ANGUISH', 5);
              }}
              name="Screaming Essence of Anguish"
            />
            <TabRect
              x={1036}
              y={255}
              count={this.props.essenceCount.anguish[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Anguish6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ANGUISH', 6);
              }}
              name="Shrieking Essence of Anguish"
            />
            <TabRect
              x={1135}
              y={255}
              count={this.props.essenceCount.anguish[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Anguish7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ANGUISH', 7);
              }}
              name="Deafening Essence of Anguish"
            />
            //#endregion //#region essence spite
            <TabRect
              x={839}
              y={353}
              count={this.props.essenceCount.spite[4]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Spite4.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SPITE', 4);
              }}
              name="Wailing Essence of Spite"
            />
            <TabRect
              x={937}
              y={353}
              count={this.props.essenceCount.spite[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Spite5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SPITE', 5);
              }}
              name="Screaming Essence of Spite"
            />
            <TabRect
              x={1036}
              y={353}
              count={this.props.essenceCount.spite[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Spite6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SPITE', 6);
              }}
              name="Shrieking Essence of Spite"
            />
            <TabRect
              x={1135}
              y={353}
              count={this.props.essenceCount.spite[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Spite7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SPITE', 7);
              }}
              name="Deafening Essence of Spite"
            />
            //#endregion //#region essence scorn
            <TabRect
              x={937}
              y={452}
              count={this.props.essenceCount.scorn[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Scorn5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SCORN', 5);
              }}
              name="Screaming Essence of Scorn"
            />
            <TabRect
              x={1036}
              y={452}
              count={this.props.essenceCount.scorn[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Scorn6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SCORN', 6);
              }}
              name="Shrieking Essence of Scorn"
            />
            <TabRect
              x={1135}
              y={452}
              count={this.props.essenceCount.scorn[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Scorn7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SCORN', 7);
              }}
              name="Deafening Essence of Scorn"
            />
            //#endregion //#region essence envy
            <TabRect
              x={937}
              y={550}
              count={this.props.essenceCount.envy[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Envy5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ENVY', 5);
              }}
              name="Screaming Essence of Envy"
            />
            <TabRect
              x={1036}
              y={550}
              count={this.props.essenceCount.envy[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Envy6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ENVY', 6);
              }}
              name="Shrieking Essence of Envy"
            />
            <TabRect
              x={1135}
              y={550}
              count={this.props.essenceCount.envy[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Envy7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ENVY', 7);
              }}
              name="Deafening Essence of Envy"
            />
            //#endregion //#region essence misery
            <TabRect
              x={937}
              y={649}
              count={this.props.essenceCount.misery[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Misery5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('MISERY', 5);
              }}
              name="Screaming Essence of Misery"
            />
            <TabRect
              x={1036}
              y={649}
              count={this.props.essenceCount.misery[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Misery6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('MISERY', 6);
              }}
              name="Shrieking Essence of Misery"
            />
            <TabRect
              x={1135}
              y={649}
              count={this.props.essenceCount.misery[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Misery7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('MISERY', 7);
              }}
              name="Deafening Essence of Misery"
            />
            //#endregion //#region essence dread
            <TabRect
              x={937}
              y={748}
              count={this.props.essenceCount.dread[5]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Dread5.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('DREAD', 5);
              }}
              name="Screaming Essence of Dread"
            />
            <TabRect
              x={1036}
              y={748}
              count={this.props.essenceCount.dread[6]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Dread6.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('DREAD', 6);
              }}
              name="Shrieking Essence of Dread"
            />
            <TabRect
              x={1135}
              y={748}
              count={this.props.essenceCount.dread[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Dread7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('DREAD', 7);
              }}
              name="Deafening Essence of Dread"
            />
            //#endregion //#region essence insanity
            <TabRect
              x={1135}
              y={846}
              count={this.props.essenceCount.insanity[8]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Insanity1.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('INSANITY', 8);
              }}
              name="Essence of Insanity"
            />
            //#endregion //#region essence horror
            <TabRect
              x={1135}
              y={944}
              count={this.props.essenceCount.horror[8]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Horror1.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('HORROR', 8);
              }}
              name="Essence of Horror"
            />
            //#endregion //#region essence delerium
            <TabRect
              x={1135}
              y={1043}
              count={this.props.essenceCount.delirium[8]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Madness1.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('DELIRIUM', 8);
              }}
              name="Essence of Delirium"
            />
            //#endregion //#region essence hysteria
            <TabRect
              x={1135}
              y={1141}
              count={this.props.essenceCount.hysteria[8]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Terror1.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('HYSTERIA', 8);
              }}
              name="Essence of Hysteria"
            />
            //#endregion //#region Currency
            <TabRect
              x={1037}
              y={846}
              count={this.props.count.scouring}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyConvertToNormal.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('SCOURING');
              }}
              name="Orb of Scouring"
            />
            <TabRect
              x={1037}
              y={944}
              count={this.props.count.annulment}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/AnnullOrb.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('ANNULMENT');
              }}
              name="Orb of Annulment"
            />
            <TabRect
              x={1037}
              y={1043}
              count={this.props.count.eternal}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyImprintOrb.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('ETERNAL');
              }}
              name="Eternal Orb"
            />
            <TabRect
              x={1037}
              y={1141}
              count={this.props.count.imprint}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyImprint.png"
              onClick={e => {
                e.preventDefault();
                this.props.orbClick('IMPRINT');
              }}
              name="Imprint"
            />
            //#endregion
            <ItemRect
              x={705}
              y={886}
              width={166}
              height={340}
              xlinkHref={'https://' + this.props.itemArt}
              onClick={this.props.itemClick}
              onMouseEnter={this.props.itemRectMouseEnter}
              onMouseLeave={this.props.itemRectMouseLeave}
              setItemRect={this.props.setItemRect}
            />
            <ItemSockets
              x={705}
              y={886}
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

export default EssenceTab;
