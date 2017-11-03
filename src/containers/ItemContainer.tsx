import { connect } from 'react-redux';
import { State } from '../reducers';
import ItemBox from '../components/ItemBox';

const mapStateToProps = (state: State) => ({
  item: state.item.currentItem,
  currencyTabRef: state.refs.currencyTab,
  itemRectRef: state.refs.itemRect
});

const mapDispatchToProps = {};

const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(ItemBox);

export default ItemContainer;
