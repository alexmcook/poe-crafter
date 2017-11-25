import { connect } from 'react-redux';
import { State } from '../reducers';
import ItemInfo from '../components/ItemInfo';

const mapStateToProps = (state: State) => ({
  item: state.item.currentItem,
  display: state.options.displayItemInfo
});

const mapDispatchToProps = {};

const ItemInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ItemInfo);

export default ItemInfoContainer;
