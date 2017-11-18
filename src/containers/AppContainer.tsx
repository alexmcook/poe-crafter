import { connect } from 'react-redux';
import { State } from '../reducers';
import App from '../components/App';

const mapStateToProps = (state: State) => ({
  currentTab: state.tab.currentTab
});

const mapDispatchToProps = {};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
