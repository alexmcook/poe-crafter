import { connect } from 'react-redux';
import { State } from '../reducers';
import CurrencyCursor from '../components/CurrencyCursor';

const mapStateToProps = (state: State) => ({
  x: state.mouse.clientX,
  y: state.mouse.clientY,
  selected: state.item.selectedCurrency
});

const mapDispatchToProps = {};

const CurrencyCursorContainer = connect(mapStateToProps, mapDispatchToProps)(
  CurrencyCursor
);

export default CurrencyCursorContainer;
