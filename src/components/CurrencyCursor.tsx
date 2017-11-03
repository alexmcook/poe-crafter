import * as React from 'react';

interface CurrencyCursorProps {
  x: number;
  y: number;
  selected: string | undefined;
}

class Stat extends React.Component<CurrencyCursorProps> {
  getSource(orb?: string) {
    let src: string | undefined;
    switch (orb) {
      case 'WHETSTONE':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyWeaponQuality.png';
        break;
      case 'ARMORSCRAP':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyArmourQuality.png';
        break;
      case 'TRANSMUTE':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeToMagic.png';
        break;
      case 'ALTERATION':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollMagic.png';
        break;
      case 'ANNULMENT':
        src = 'https://web.poecdn.com/image/Art/2DItems/Currency/AnnullOrb.png';
        break;
      case 'EXALTED':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyAddModToRare.png';
        break;
      case 'REGAL':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeMagicToRare.png';
        break;
      case 'ALCHEMY':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeToRare.png';
        break;
      case 'CHAOS':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png';
        break;
      case 'BLESSED':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyImplicitMod.png';
        break;
      case 'AUGMENT':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyAddModToMagic.png';
        break;
      case 'DIVINE':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyModValues.png';
        break;
      case 'JEWELLER':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketNumbers.png';
        break;
      case 'FUSING':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketLinks.png';
        break;
      case 'CHROMATIC':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketColours.png';
        break;
      case 'SCOURING':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyConvertToNormal.png';
        break;
      case 'VAAL':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/TTTTTTTTTTTTTTTTTTT.png';
        break;
      case 'ETERNAL':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyImprintOrb.png';
        break;
      case 'IMPRINT':
        src =
          'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyImprint.png';
        break;
      default:
        src = '';
        break;
    }
    return src;
  }

  render() {
    const style: {} = {
      position: 'absolute',
      left: (this.props.x ? this.props.x : 0) - 12,
      top: (this.props.y ? this.props.y : 0) - 12,
      zIndex: 3
    };

    return (
      <div>
        <img
          className="no-pointer-events"
          style={style}
          src={this.getSource(this.props.selected)}
          width="24"
          height="24"
          alt=""
        />
      </div>
    );
  }
}

export default Stat;
