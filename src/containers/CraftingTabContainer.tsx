import { connect } from 'react-redux';
import { State } from '../reducers';
import * as mouse from '../actions/mouseActions';
import * as refs from '../actions/refsActions';
import CraftingTab from '../components/CraftingTab';

const mapStateToProps = (state: State) => ({
  currentTab: state.tab.currentTab,
  itemArt: state.item.currentItem.artPath,
  itemSockets: state.item.currentItem.socketColors,
  itemLinks: state.item.currentItem.socketLinks,
  verticalSockets: state.item.currentItem.verticalSockets
});

const mapDispatchToProps = {
  mouseMove: mouse.mouseMove,
  mouseLeave: mouse.mouseLeave,
  itemRectMouseEnter: mouse.itemRectMouseEnter,
  itemRectMouseLeave: mouse.itemRectMouseLeave,
  setCurrentTab: refs.setCurrentTab,
  setItemRect: refs.setItemRect
};

const CraftingTabContainer = connect(mapStateToProps, mapDispatchToProps)(
  CraftingTab
);

export default CraftingTabContainer;
