import * as React from 'react';
import * as _ from 'lodash';
import TabRect from './TabRect';
import ItemRect from './ItemRect';
import ItemSockets from './ItemSockets';
import { Grid } from 'semantic-ui-react';
import { Rarity } from '../utils/item';
const background = require('../assets/essencetab.png');
const essenceTexts: EssenceText[] = require('../data/essenceText.json');

interface EssenceText {
  id: string;
  text: string[];
}

interface EssenceTabProps {
  count: { [key: string]: number };
  essenceCount: { [key: string]: { [key: number]: number } };
  itemArt: string;
  itemSockets: string;
  itemLinks: string;
  verticalSockets: boolean;
  orbClick: (orb: string) => { type: string; payload: string };
  essenceClick: (
    essence: string,
    tier: number
  ) => { type: string; payload: { essence: string; tier: number } };
  itemClick: (e: MouseEvent) => { type: string; payload: boolean };
  mouseMove: (
    e: MouseEvent
  ) => { type: string; payload: { x: number; y: number } };
  mouseLeave: () => { type: string; payload: {} };
  anchorItemBox: boolean;
  imprintName: string;
  imprintBase: string;
  imprintRarity: Rarity;
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

  getEssenceText(id: string): EssenceText {
    let match = _.find(essenceTexts, essenceText => {
      return essenceText.id === id;
    });
    return match as EssenceText;
  }

  render() {
    return (
      <Grid.Row centered={true}>
        <Grid.Column computer={6} tablet={10} mobile={12}>
          <svg
            className="game-tab drop-shadow no-select"
            viewBox="0 0 1282 1282"
            preserveAspectRatio="xMinYMin meet"
            onMouseMove={e => this.props.mouseMove(e.nativeEvent)}
            onMouseLeave={() => this.props.mouseLeave()}
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
              name="Deafening Essence of Greed"
              essenceText={this.getEssenceText('Greed7').text}
              stackSize={9}
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
              name="Shrieking Essence of Greed"
              essenceText={this.getEssenceText('Greed6').text}
              stackSize={9}
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
              name="Screaming Essence of Greed"
              essenceText={this.getEssenceText('Greed5').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Greed4').text}
              stackSize={9}
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
              name="Weeping Essence of Greed"
              essenceText={this.getEssenceText('Greed3').text}
              stackSize={9}
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
              name="Muttering Essence of Greed"
              essenceText={this.getEssenceText('Greed2').text}
              stackSize={9}
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
              name="Whispering Essence of Greed"
              essenceText={this.getEssenceText('Greed1').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence contempt
            <TabRect
              x={68}
              y={157}
              count={this.props.essenceCount.contempt[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Contempt7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('CONTEMPT', 7);
              }}
              name="Deafening Essence of Contempt"
              essenceText={this.getEssenceText('Contempt7').text}
              stackSize={9}
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
              name="Shrieking Essence of Contempt"
              essenceText={this.getEssenceText('Contempt6').text}
              stackSize={9}
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
              name="Screaming Essence of Contempt"
              essenceText={this.getEssenceText('Contempt5').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Contempt4').text}
              stackSize={9}
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
              name="Weeping Essence of Contempt"
              essenceText={this.getEssenceText('Contempt3').text}
              stackSize={9}
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
              name="Muttering Essence of Contempt"
              essenceText={this.getEssenceText('Contempt2').text}
              stackSize={9}
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
              name="Whispering Essence of Contempt"
              essenceText={this.getEssenceText('Contempt1').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence hatred
            <TabRect
              x={68}
              y={255}
              count={this.props.essenceCount.hatred[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Hatred7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('HATRED', 7);
              }}
              name="Deafening Essence of Hatred"
              essenceText={this.getEssenceText('Hatred7').text}
              stackSize={9}
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
              name="Shrieking Essence of Hatred"
              essenceText={this.getEssenceText('Hatred6').text}
              stackSize={9}
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
              name="Screaming Essence of Hatred"
              essenceText={this.getEssenceText('Hatred5').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Hatred4').text}
              stackSize={9}
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
              name="Weeping Essence of Hatred"
              essenceText={this.getEssenceText('Hatred3').text}
              stackSize={9}
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
              name="Muttering Essence of Hatred"
              essenceText={this.getEssenceText('Hatred2').text}
              stackSize={9}
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
              name="Whispering Essence of Hatred"
              essenceText={this.getEssenceText('Hatred1').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence woe
            <TabRect
              x={68}
              y={353}
              count={this.props.essenceCount.woe[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Woe7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('WOE', 7);
              }}
              name="Deafening Essence of Woe"
              essenceText={this.getEssenceText('Woe7').text}
              stackSize={9}
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
              name="Shrieking Essence of Woe"
              essenceText={this.getEssenceText('Woe6').text}
              stackSize={9}
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
              name="Screaming Essence of Woe"
              essenceText={this.getEssenceText('Woe5').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Woe4').text}
              stackSize={9}
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
              name="Weeping Essence of Woe"
              essenceText={this.getEssenceText('Woe3').text}
              stackSize={9}
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
              name="Muttering Essence of Woe"
              essenceText={this.getEssenceText('Woe2').text}
              stackSize={9}
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
              name="Whispering Essence of Woe"
              essenceText={this.getEssenceText('Woe1').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence fear
            <TabRect
              x={68}
              y={452}
              count={this.props.essenceCount.fear[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Fear7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('FEAR', 7);
              }}
              name="Deafening Essence of Fear"
              essenceText={this.getEssenceText('Fear7').text}
              stackSize={9}
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
              name="Shrieking Essence of Fear"
              essenceText={this.getEssenceText('Fear6').text}
              stackSize={9}
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
              name="Screaming Essence of Fear"
              essenceText={this.getEssenceText('Fear5').text}
              stackSize={9}
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
              name="Wailing Essence of Fear"
              essenceText={this.getEssenceText('Fear4').text}
              stackSize={9}
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
              name="Weeping Essence of Fear"
              essenceText={this.getEssenceText('Fear3').text}
              stackSize={9}
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
              name="Muttering Essence of Fear"
              essenceText={this.getEssenceText('Fear2').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence anger
            <TabRect
              x={68}
              y={550}
              count={this.props.essenceCount.anger[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Anger7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('ANGER', 7);
              }}
              name="Deafening Essence of Anger"
              essenceText={this.getEssenceText('Anger7').text}
              stackSize={9}
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
              name="Shrieking Essence of Anger"
              essenceText={this.getEssenceText('Anger6').text}
              stackSize={9}
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
              name="Screaming Essence of Anger"
              essenceText={this.getEssenceText('Anger5').text}
              stackSize={9}
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
              name="Wailing Essence of Anger"
              essenceText={this.getEssenceText('Anger4').text}
              stackSize={9}
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
              name="Weeping Essence of Anger"
              essenceText={this.getEssenceText('Anger3').text}
              stackSize={9}
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
              name="Muttering Essence of Anger"
              essenceText={this.getEssenceText('Anger2').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence torment
            <TabRect
              x={68}
              y={649}
              count={this.props.essenceCount.torment[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Torment7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('TORMENT', 7);
              }}
              name="Deafening Essence of Torment"
              essenceText={this.getEssenceText('Torment7').text}
              stackSize={9}
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
              name="Shrieking Essence of Torment"
              essenceText={this.getEssenceText('Torment6').text}
              stackSize={9}
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
              name="Screaming Essence of Torment"
              essenceText={this.getEssenceText('Torment5').text}
              stackSize={9}
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
              name="Wailing Essence of Torment"
              essenceText={this.getEssenceText('Torment4').text}
              stackSize={9}
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
              name="Weeping Essence of Torment"
              essenceText={this.getEssenceText('Torment3').text}
              stackSize={9}
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
              name="Muttering Essence of Torment"
              essenceText={this.getEssenceText('Torment2').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence sorrow
            <TabRect
              x={68}
              y={748}
              count={this.props.essenceCount.sorrow[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Sorrow7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SORROW', 7);
              }}
              name="Deafening Essence of Sorrow"
              essenceText={this.getEssenceText('Sorrow7').text}
              stackSize={9}
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
              name="Shrieking Essence of Sorrow"
              essenceText={this.getEssenceText('Sorrow6').text}
              stackSize={9}
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
              name="Screaming Essence of Sorrow"
              essenceText={this.getEssenceText('Sorrow5').text}
              stackSize={9}
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
              name="Wailing Essence of Sorrow"
              essenceText={this.getEssenceText('Sorrow4').text}
              stackSize={9}
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
              name="Weeping Essence of Sorrow"
              essenceText={this.getEssenceText('Sorrow3').text}
              stackSize={9}
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
              name="Muttering Essence of Sorrow"
              essenceText={this.getEssenceText('Sorrow2').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence rage
            <TabRect
              x={68}
              y={846}
              count={this.props.essenceCount.rage[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Rage7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('RAGE', 7);
              }}
              name="Deafening Essence of Rage"
              essenceText={this.getEssenceText('Rage7').text}
              stackSize={9}
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
              name="Shrieking Essence of Rage"
              essenceText={this.getEssenceText('Rage6').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Rage5').text}
              stackSize={9}
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
              name="Wailing Essence of Rage"
              essenceText={this.getEssenceText('Rage4').text}
              stackSize={9}
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
              name="Weeping Essence of Rage"
              essenceText={this.getEssenceText('Rage3').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence suffering
            <TabRect
              x={68}
              y={944}
              count={this.props.essenceCount.suffering[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Suffering7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('SUFFERING', 7);
              }}
              name="Deafening Essence of Suffering"
              essenceText={this.getEssenceText('Suffering7').text}
              stackSize={9}
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
              name="Shrieking Essence of Suffering"
              essenceText={this.getEssenceText('Suffering6').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Suffering5').text}
              stackSize={9}
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
              name="Wailing Essence of Suffering"
              essenceText={this.getEssenceText('Suffering4').text}
              stackSize={9}
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
              name="Weeping Essence of Suffering"
              essenceText={this.getEssenceText('Suffering3').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence wrath
            <TabRect
              x={68}
              y={1043}
              count={this.props.essenceCount.wrath[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Wrath7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('WRATH', 7);
              }}
              name="Deafening Essence of Wrath"
              essenceText={this.getEssenceText('Wrath7').text}
              stackSize={9}
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
              name="Shrieking Essence of Wrath"
              essenceText={this.getEssenceText('Wrath6').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Wrath5').text}
              stackSize={9}
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
              name="Wailing Essence of Wrath"
              essenceText={this.getEssenceText('Wrath4').text}
              stackSize={9}
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
              name="Weeping Essence of Wrath"
              essenceText={this.getEssenceText('Wrath3').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence doubt
            <TabRect
              x={68}
              y={1141}
              count={this.props.essenceCount.doubt[7]}
              xlinkHref="https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Doubt7.png"
              onClick={e => {
                e.preventDefault();
                this.props.essenceClick('DOUBT', 7);
              }}
              name="Deafening Essence of Doubt"
              essenceText={this.getEssenceText('Doubt7').text}
              stackSize={9}
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
              name="Shrieking Essence of Doubt"
              essenceText={this.getEssenceText('Doubt6').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Doubt5').text}
              stackSize={9}
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
              name="Wailing Essence of Doubt"
              essenceText={this.getEssenceText('Doubt4').text}
              stackSize={9}
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
              name="Weeping Essence of Doubt"
              essenceText={this.getEssenceText('Doubt3').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence loathing
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
              essenceText={this.getEssenceText('Loathing4').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Loathing5').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Loathing6').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Loathing7').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence zeal
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
              essenceText={this.getEssenceText('Zeal4').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Zeal5').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Zeal6').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Zeal7').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence anguish
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
              essenceText={this.getEssenceText('Anguish4').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Anguish5').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Anguish6').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Anguish7').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence spite
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
              essenceText={this.getEssenceText('Spite4').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Spite5').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Spite6').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Spite7').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Scorn5').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Scorn6').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Scorn7').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence envy
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
              essenceText={this.getEssenceText('Envy5').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Envy6').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Envy7').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence misery
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
              essenceText={this.getEssenceText('Misery5').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Misery6').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Misery7').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence dread
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
              essenceText={this.getEssenceText('Dread5').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Dread6').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Dread7').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence insanity
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
              essenceText={this.getEssenceText('Insanity8').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Horror8').text}
              stackSize={9}
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
              essenceText={this.getEssenceText('Delirium8').text}
              stackSize={9}
            />
            //#endregion 
            //#region essence hysteria
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
              essenceText={this.getEssenceText('Hysteria8').text}
              stackSize={9}
            />
            //#endregion 
            //#region Currency
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
              currencyText="Removes all properties from an item"
              stackSize={30}
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
              currencyText="Removes a random property from an item"
              stackSize={20}
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
              currencyText="Creates an imprint of an item for later restoration"
              stackSize={10}
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
              currencyText="Restores an imprinted item onto the original"
              imprintName={this.props.imprintName}
              imprintBase={this.props.imprintBase}
              imprintRarity={this.props.imprintRarity}
            />
            //#endregion
            <ItemRect
              x={705}
              y={886}
              width={166}
              height={340}
              xlinkHref={'https://' + this.props.itemArt}
              onClick={this.props.itemClick}
              alwaysOn={this.props.anchorItemBox}
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
