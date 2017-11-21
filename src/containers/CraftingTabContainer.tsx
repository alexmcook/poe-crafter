import { connect } from 'react-redux';
import { State } from '../reducers';
import * as currency from '../actions/currencyActions';
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
  cursorX: state.input.clientX,
  cursorY: state.input.clientY,
  anchorItemBox: state.input.anchorItemBox
});

const mapDispatchToProps = {
  mouseMove: input.mouseMove,
  mouseLeave: input.mouseLeave,
  craftClick: currency.craftClick,
  optionClick: currency.optionClick
};

const CraftingTabContainer = connect(mapStateToProps, mapDispatchToProps)(
  CraftingTab
);

export default CraftingTabContainer;
