import { connect } from 'react-redux';
import { State } from '../reducers';
import Options from '../components/Options';
import { setForceShift, setAnchorItemBox, reset } from '../actions/optionsActions';

const mapStateToProps = (state: State) => ({
  forceShiftState: state.item.forceShift,
  anchorItemBoxState: state.input.anchorItemBox
});

const mapDispatchToProps = {
  setForceShift: setForceShift,
  setAnchorItemBox: setAnchorItemBox,
  reset: reset
};

const OptionsContainer = connect(mapStateToProps, mapDispatchToProps)(Options);

export default OptionsContainer;
