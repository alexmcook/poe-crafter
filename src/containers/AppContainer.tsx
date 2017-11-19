import { connect } from 'react-redux';
import { State } from '../reducers';
import { keyUp } from '../actions/inputActions';
import App from '../components/App';

const mapStateToProps = (state: State) => ({
  currentTab: state.tab.currentTab
});

const mapDispatchToProps = {
  keyListener: keyUp
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
