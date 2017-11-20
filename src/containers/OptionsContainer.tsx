import { connect } from 'react-redux';
import { State } from '../reducers';
import Options from '../components/Options';
import { setForceShift, setAnchorItemBox } from '../actions/optionsActions';

const mapStateToProps = (state: State) => ({
  forceShiftState: state.item.forceShift,
  anchorItemBoxState: state.item.anchorItemBox
});

const mapDispatchToProps = {
  setForceShift: setForceShift,
  setAnchorItemBox: setAnchorItemBox
};

const OptionsContainer = connect(mapStateToProps, mapDispatchToProps)(Options);

export default OptionsContainer;
