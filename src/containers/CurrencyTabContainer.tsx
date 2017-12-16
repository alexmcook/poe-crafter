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
  itemWidth: state.item.currentItem.w,
  itemHeight: state.item.currentItem.h,
  atlasType: state.item.currentItem.atlasType,
  verticalSockets: state.item.currentItem.verticalSockets,
  anchorItemBox: state.options.anchorItemBox,
  imprintName: state.item.imprint ? state.item.imprint.itemName : undefined,
  imprintBase: state.item.imprint ? state.item.imprint.name : undefined,
  imprintRarity: state.item.imprint ? state.item.imprint.rarity : undefined
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
