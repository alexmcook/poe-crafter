import { connect } from 'react-redux';
import { State } from '../reducers';
import Tooltip from '../components/Tooltip';

const mapStateToProps = (state: State) => ({
  cursorX: state.input.clientX,
  cursorY: state.input.clientY
});

const mapDispatchToProps = {};

const TooltipContainer = connect(mapStateToProps, mapDispatchToProps)(Tooltip);

export default TooltipContainer;
