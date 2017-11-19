import { connect } from 'react-redux';
import { State } from '../reducers';
import CurrencyCursor from '../components/CurrencyCursor';

const mapStateToProps = (state: State) => ({
  x: state.input.clientX,
  y: state.input.clientY,
  selected: state.item.selectedCurrency
});

const mapDispatchToProps = {};

const CurrencyCursorContainer = connect(mapStateToProps, mapDispatchToProps)(
  CurrencyCursor
);

export default CurrencyCursorContainer;
