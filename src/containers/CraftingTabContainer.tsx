import { connect } from 'react-redux';
import { State } from '../reducers';
import * as currency from '../actions/currencyActions';
import * as mouse from '../actions/mouseActions';
import * as refs from '../actions/refsActions';
import CraftingTab from '../components/CraftingTab';

const mapStateToProps = (state: State) => ({
  currentTab: state.tab.currentTab,
  item: state.item.currentItem,
  itemArt: state.item.currentItem.artPath,
  itemSockets: state.item.currentItem.socketColors,
  itemLinks: state.item.currentItem.socketLinks,
  verticalSockets: state.item.currentItem.verticalSockets,
  craftingOptions: state.craftingOptions,
  selectedOption: state.item.selectedOption
});

const mapDispatchToProps = {
  mouseMove: mouse.mouseMove,
  mouseLeave: mouse.mouseLeave,
  itemRectMouseEnter: mouse.itemRectMouseEnter,
  itemRectMouseLeave: mouse.itemRectMouseLeave,
  setCurrentTab: refs.setCurrentTab,
  setItemRect: refs.setItemRect,
  craftClick: currency.craftClick,
  optionClick: currency.optionClick
};

const CraftingTabContainer = connect(mapStateToProps, mapDispatchToProps)(
  CraftingTab
);

export default CraftingTabContainer;
