import { connect } from 'react-redux';
import { State } from '../reducers';
import ItemBox from '../components/ItemBox';

const mapStateToProps = (state: State) => ({
  item: state.item.currentItem
});

const mapDispatchToProps = {};

const ItemBoxContainer = connect(mapStateToProps, mapDispatchToProps)(ItemBox);

export default ItemBoxContainer;
