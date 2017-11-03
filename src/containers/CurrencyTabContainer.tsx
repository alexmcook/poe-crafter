import { connect } from 'react-redux';
import { State } from '../reducers';
import * as currency from '../actions/currencyActions';
import * as mouse from '../actions/mouseActions';
import * as refs from '../actions/refsActions';
import CurrencyTab from '../components/CurrencyTab';

const mapStateToProps = (state: State) => ({
  count: state.item.currencyCount,
  selected: state.item.selectedCurrency,
  itemArt: state.item.currentItem.artPath
});

const mapDispatchToProps = {
  orbClick: currency.orbClick,
  itemClick: currency.itemClick,
  mouseMove: mouse.mouseMove,
  mouseLeave: mouse.mouseLeave,
  setCurrencyTab: refs.setCurrencyTab,
  setItemRect: refs.setItemRect
};

const CurrencyTabContainer = connect(mapStateToProps, mapDispatchToProps)(
  CurrencyTab
);

export default CurrencyTabContainer;
