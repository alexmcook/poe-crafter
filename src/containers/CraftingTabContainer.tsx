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
  verticalSockets: state.item.currentItem.verticalSockets,
  craftingOptions: state.craftingOptions,
  selectedOption: state.item.selectedOption,
  anchorItemBox: state.input.anchorItemBox
});

const mapDispatchToProps = {
  mouseMove: input.mouseMove,
  mouseLeave: input.mouseLeave,
  craftClick: craft.craftClick,
  optionClick: craft.optionClick,
  masterClick: craft.masterClick
};

const CraftingTabContainer = connect(mapStateToProps, mapDispatchToProps)(
  CraftingTab
);

export default CraftingTabContainer;
