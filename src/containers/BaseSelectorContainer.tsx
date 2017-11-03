import { connect } from 'react-redux';
import { State } from '../reducers';
import { selectBase } from '../actions/baseSelectorActions';
import BaseSelector from '../components/BaseSelector';

const mapStateToProps = (state: State) => ({
  bases: state.item.baseList
});

const mapDispatchToProps = {
  selectBase: selectBase
};

const BaseSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(BaseSelector);

export default BaseSelectorContainer;
