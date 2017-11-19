import { connect } from 'react-redux';
import { State } from '../reducers';
import ItemBox from '../components/ItemBox';

const mapStateToProps = (state: State) => ({
  currentTab: state.tab.currentTab,
  item: state.item.currentItem,
  currentTabRef: state.refs.currentTab,
  itemRectRef: state.refs.itemRect,
  display: state.input.hoverItemRect
});

const mapDispatchToProps = {};

const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(ItemBox);

export default ItemContainer;
