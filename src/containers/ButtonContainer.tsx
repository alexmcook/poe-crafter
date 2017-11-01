import { connect } from 'react-redux';
import * as currency from '../actions';
import ButtonGroup from '../components/ButtonGroup';

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  whetstone: currency.whetstone,
  armorScrap: currency.armorScrap,
  transmute: currency.transmute,
  alteration: currency.alteration,
  annulment: currency.annulment,
  exalted: currency.exalted,
  regal: currency.regal,
  alchemy: currency.alchemy,
  chaos: currency.chaos,
  blessed: currency.blessed,
  augment: currency.augment,
  divine: currency.divine,
  jeweller: currency.jeweller,
  fusing: currency.fusing,
  chromatic: currency.chromatic,
  scouring: currency.scouring,
  eternal: currency.eternal,
  imprint: currency.imprint
};

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonGroup);

export default ButtonContainer;