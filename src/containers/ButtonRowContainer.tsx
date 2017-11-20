import { connect } from 'react-redux';
import { State } from '../reducers';
import { changeTab } from '../actions/tabActions';
import ButtonRow from '../components/ButtonRow';

const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = {
  changeTab: changeTab
};

const ButtonRowContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonRow);

export default ButtonRowContainer;
