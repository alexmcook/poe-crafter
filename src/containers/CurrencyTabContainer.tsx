import { connect } from 'react-redux';
import { State } from '../reducers';
import * as currency from '../actions/currencyActions';
import * as input from '../actions/inputActions';
import CurrencyTab from '../components/CurrencyTab';

const mapStateToProps = (state: State) => ({
  count: state.item.currencyCount,
  itemArt: state.item.currentItem.artPath,
  itemSockets: state.item.currentItem.socketColors,
  itemLinks: state.item.currentItem.socketLinks,
  verticalSockets: state.item.currentItem.verticalSockets,
  anchorItemBox: state.input.anchorItemBox
});

const mapDispatchToProps = {
  orbClick: currency.orbClick,
  itemClick: currency.itemClick,
  mouseMove: input.mouseMove,
  mouseLeave: input.mouseLeave
};

const CurrencyTabContainer = connect(mapStateToProps, mapDispatchToProps)(
  CurrencyTab
);

export default CurrencyTabContainer;
