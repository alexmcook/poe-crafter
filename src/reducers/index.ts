import { combineReducers } from 'redux';
import item, { ItemState } from './itemReducer';

export interface State {
  item: ItemState;
}

export default combineReducers({
  item
});
