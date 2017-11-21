import { connect } from 'react-redux';
import { State } from '../reducers';
import * as currency from '../actions/currencyActions';
import * as input from '../actions/inputActions';
import EssenceTab from '../components/EssenceTab';

const mapStateToProps = (state: State) => ({
  count: state.item.currencyCount,
  essenceCount: state.item.essenceCount,
  itemArt: state.item.currentItem.artPath,
  itemSockets: state.item.currentItem.socketColors,
  itemLinks: state.item.currentItem.socketLinks,
  verticalSockets: state.item.currentItem.verticalSockets,
  anchorItemBox: state.input.anchorItemBox
});

const mapDispatchToProps = {
  orbClick: currency.orbClick,
  essenceClick: currency.essenceClick,
  itemClick: currency.itemClick,
  mouseMove: input.mouseMove,
  mouseLeave: input.mouseLeave
};

const EssenceTabContainer = connect(mapStateToProps, mapDispatchToProps)(
  EssenceTab
);

export default EssenceTabContainer;
