import { connect } from 'react-redux';
import { ItemState } from '../reducers/itemReducer';
import ItemBox from '../components/ItemBox';

const mapStateToProps = (state: ItemState) => ({
  item: state.item
});

const mapDispatchToProps = {};

const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(ItemBox);

export default ItemContainer;
