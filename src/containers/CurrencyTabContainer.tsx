import { connect } from 'react-redux';
import { State } from '../reducers';
import * as currency from '../actions/currencyActions';
import * as mouse from '../actions/mouseActions';
import * as refs from '../actions/refsActions';
import CurrencyTab from '../components/CurrencyTab';

const mapStateToProps = (state: State) => ({
  currentTab: state.tab.currentTab,
  count: state.item.currencyCount,
  itemArt: state.item.currentItem.artPath,
  itemSockets: state.item.currentItem.socketColors,
  itemLinks: state.item.currentItem.socketLinks,
  verticalSockets: state.item.currentItem.verticalSockets
});

const mapDispatchToProps = {
  orbClick: currency.orbClick,
  itemClick: currency.itemClick,
  mouseMove: mouse.mouseMove,
  mouseLeave: mouse.mouseLeave,
  itemRectMouseEnter: mouse.itemRectMouseEnter,
  itemRectMouseLeave: mouse.itemRectMouseLeave,
  setCurrentTab: refs.setCurrentTab,
  setItemRect: refs.setItemRect
};

const CurrencyTabContainer = connect(mapStateToProps, mapDispatchToProps)(
  CurrencyTab
);

export default CurrencyTabContainer;
