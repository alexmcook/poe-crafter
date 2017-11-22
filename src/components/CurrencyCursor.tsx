import * as React from 'react';

interface CurrencyCursorProps {
  x: number;
  y: number;
  selected: { name: string; tier: number };
}

interface CurrencyCursorState {
  x: number;
  y: number;
  mounted: boolean;
}

class Stat extends React.Component<CurrencyCursorProps, CurrencyCursorState> {
  constructor(props: CurrencyCursorProps) {
    super(props);
    this.state = { x: 0, y: 0, mounted: false };
  }

  getSource(name: string, tier: number) {
    switch (name) {
      //#region regular currency
      case 'WHETSTONE':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyWeaponQuality.png';
      case 'ARMORSCRAP':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyArmourQuality.png';
      case 'TRANSMUTE':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeToMagic.png';
      case 'ALTERATION':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollMagic.png';
      case 'ANNULMENT':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/AnnullOrb.png';
      case 'EXALTED':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyAddModToRare.png';
      case 'REGAL':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeMagicToRare.png';
      case 'ALCHEMY':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeToRare.png';
      case 'CHAOS':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png';
      case 'BLESSED':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyImplicitMod.png';
      case 'AUGMENT':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyAddModToMagic.png';
      case 'DIVINE':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyModValues.png';
      case 'JEWELLER':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketNumbers.png';
      case 'FUSING':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketLinks.png';
      case 'CHROMATIC':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketColours.png';
      case 'SCOURING':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyConvertToNormal.png';
      case 'VAAL':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyVaal.png';
      case 'ETERNAL':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyImprintOrb.png';
      case 'IMPRINT':
        return 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyImprint.png';
      //#endregion
      //#region essence
      case 'GREED':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Greed' +
          tier +
          '.png'
        );
      case 'CONTEMPT':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Contempt' +
          tier +
          '.png'
        );
      case 'HATRED':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Hatred' +
          tier +
          '.png'
        );
      case 'WOE':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Woe' +
          tier +
          '.png'
        );
      case 'FEAR':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Fear' +
          tier +
          '.png'
        );
      case 'ANGER':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Anger' +
          tier +
          '.png'
        );
      case 'TORMENT':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Torment' +
          tier +
          '.png'
        );
      case 'SORROW':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Sorrow' +
          tier +
          '.png'
        );
      case 'RAGE':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Rage' +
          tier +
          '.png'
        );
      case 'SUFFERING':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Suffering' +
          tier +
          '.png'
        );
      case 'WRATH':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Wrath' +
          tier +
          '.png'
        );
      case 'DOUBT':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Doubt' +
          tier +
          '.png'
        );
      case 'LOATHING':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Loathing' +
          tier +
          '.png'
        );
      case 'ZEAL':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Zeal' +
          tier +
          '.png'
        );
      case 'ANGUISH':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Anguish' +
          tier +
          '.png'
        );
      case 'SPITE':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Spite' +
          tier +
          '.png'
        );
      case 'SCORN':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Scorn' +
          tier +
          '.png'
        );
      case 'ENVY':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Envy' +
          tier +
          '.png'
        );
      case 'MISERY':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Misery' +
          tier +
          '.png'
        );
      case 'DREAD':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Dread' +
          tier +
          '.png'
        );
      case 'INSANITY':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Insanity' +
          (tier - 7) +
          '.png'
        );
      case 'HORROR':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Horror' +
          (tier - 7) +
          '.png'
        );
      case 'DELIRIUM':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Madness' +
          (tier - 7) +
          '.png'
        );
      case 'HYSTERIA':
        return (
          'https://web.poecdn.com/image/Art/2DItems/Currency/Essence/Terror' +
          (tier - 7) +
          '.png'
        );
      //#endregion
      default:
        return '';
    }
  }

  updatePos(props: CurrencyCursorProps) {
    this.setState({
      x: (props.x ? props.x : 0) - 12 + window.scrollX,
      y: (props.y ? props.y : 0) - 12 + window.scrollY
    });
  }

  componentWillReceiveProps(props: CurrencyCursorProps) {
    if (this.state.mounted) {
      this.updatePos(props);
    }
  }

  componentDidMount() {
    this.setState({ mounted: true });
    window.addEventListener('scroll', () => this.updatePos(this.props));
  }

  componentWillUnmount() {
    this.setState({ mounted: false });
    window.removeEventListener('scroll', () => this.updatePos(this.props));
  }

  render() {
    const style: {} = {
      position: 'absolute',
      left: this.state.x,
      top: this.state.y,
      zIndex: 3
    };

    return (
      this.state.mounted && (
        <div>
          <img
            className="no-select no-pointer-events"
            style={style}
            src={this.getSource(
              this.props.selected.name,
              this.props.selected.tier
            )}
            width="24"
            height="24"
            alt=""
          />
        </div>
      )
    );
  }
}

export default Stat;
