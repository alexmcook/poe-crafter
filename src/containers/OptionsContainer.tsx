import { connect } from 'react-redux';
import { State } from '../reducers';
import Options from '../components/Options';
import { setForceShift, setAnchorItemBox, setDisplayItemInfo, reset } from '../actions/optionsActions';

const mapStateToProps = (state: State) => ({
  forceShiftState: state.item.forceShift,
  anchorItemBoxState: state.options.anchorItemBox,
  displayItemInfoState: state.options.displayItemInfo
});

const mapDispatchToProps = {
  setForceShift: setForceShift,
  setAnchorItemBox: setAnchorItemBox,
  setDisplayItemInfo: setDisplayItemInfo,
  reset: reset
};

const OptionsContainer = connect(mapStateToProps, mapDispatchToProps)(Options);

export default OptionsContainer;
