import { connect } from 'react-redux';
import { State } from '../reducers';
import * as craft from '../actions/craftActions';
import * as input from '../actions/inputActions';
import CraftingTab from '../components/CraftingTab';

const mapStateToProps = (state: State) => ({
  item: state.item.currentItem,
  itemArt: state.item.currentItem.artPath,
  itemSockets: state.item.currentItem.socketColors,
  itemLinks: state.item.currentItem.socketLinks,
  itemWidth: state.item.currentItem.w,
  itemHeight: state.item.currentItem.h,
  atlasType: state.item.currentItem.atlasType,
  verticalSockets: state.item.currentItem.verticalSockets,
  selectedOption: state.item.selectedOption,
  currentMaster: state.craftingOptions.currentMaster,
  craftingOptions: state.craftingOptions.options,
  craftingOptionsSlice: state.craftingOptions.optionsSlice,
  scrollerPos: state.craftingOptions.scrollerPos,
  optionsPos: state.craftingOptions.optionsPos,
  anchorItemBox: state.options.anchorItemBox
});

const mapDispatchToProps = {
  mouseMove: input.mouseMove,
  craftClick: craft.craftClick,
  optionClick: craft.optionClick,
  masterClick: craft.masterClick,
  craftScroll: input.scroll
};

const CraftingTabContainer = connect(mapStateToProps, mapDispatchToProps)(
  CraftingTab
);

export default CraftingTabContainer;
