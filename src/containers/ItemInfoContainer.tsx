import { connect } from 'react-redux';
import { State } from '../reducers';
import { affixClickAdd, affixClickRemove } from '../actions/currencyActions';
import ItemInfo from '../components/ItemInfo';

const mapStateToProps = (state: State) => ({
  item: state.item.currentItem,
  display: state.options.displayItemInfo
});

const mapDispatchToProps = {
  affixClickAdd: affixClickAdd,
  affixClickRemove: affixClickRemove
};

const ItemInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ItemInfo);

export default ItemInfoContainer;
