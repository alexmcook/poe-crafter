import { connect } from 'react-redux';
import { State } from '../reducers';
import { selectBase, setLevel } from '../actions/baseSelectorActions';
import BaseSelector from '../components/BaseSelector';

const mapStateToProps = (state: State) => ({
  bases: state.item.baseList,
  currentItem: state.item.currentItem
});

const mapDispatchToProps = {
  selectBase: selectBase,
  setLevel: setLevel
};

const BaseSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(BaseSelector);

export default BaseSelectorContainer;
