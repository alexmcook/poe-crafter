import { connect } from 'react-redux';
import { State } from '../reducers';
import { selectBase } from '../actions/baseSelectorActions';
import { changeTab } from '../actions/tabActions';
import BaseSelector from '../components/BaseSelector';

const mapStateToProps = (state: State) => ({
  bases: state.item.baseList,
  currentItem: state.item.currentItem
});

const mapDispatchToProps = {
  selectBase: selectBase,
  changeTab: changeTab
};

const BaseSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(BaseSelector);

export default BaseSelectorContainer;
