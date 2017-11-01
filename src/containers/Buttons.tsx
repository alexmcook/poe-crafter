import { connect } from 'react-redux';
import { chaos, remove } from '../actions';
import Button from '../components/Button';

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  action: chaos,
  action2: remove
};

const Buttons = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default Buttons;