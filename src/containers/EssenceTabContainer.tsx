import { connect } from 'react-redux';
import { State } from '../reducers';
import * as currency from '../actions/currencyActions';
import * as mouse from '../actions/mouseActions';
import * as refs from '../actions/refsActions';
import EssenceTab from '../components/EssenceTab';

const mapStateToProps = (state: State) => ({
  currentTab: state.tab.currentTab,
  count: state.item.currencyCount,
  essenceCount: state.item.essenceCount,
  itemArt: state.item.currentItem.artPath,
  itemSockets: state.item.currentItem.socketColors,
  itemLinks: state.item.currentItem.socketLinks,
  verticalSockets: state.item.currentItem.verticalSockets
});

const mapDispatchToProps = {
  orbClick: currency.orbClick,
  essenceClick: currency.essenceClick,
  itemClick: currency.itemClick,
  mouseMove: mouse.mouseMove,
  mouseLeave: mouse.mouseLeave,
  itemRectMouseEnter: mouse.itemRectMouseEnter,
  itemRectMouseLeave: mouse.itemRectMouseLeave,
  setCurrentTab: refs.setCurrentTab,
  setItemRect: refs.setItemRect
};

const EssenceTabContainer = connect(mapStateToProps, mapDispatchToProps)(
  EssenceTab
);

export default EssenceTabContainer;
