import { combineReducers } from 'redux';
import item, { ItemState } from './itemReducer';
import mouse, { MouseState } from './mouseReducer';

export interface State {
  item: ItemState;
  mouse: MouseState;
}

export default combineReducers({
  item,
  mouse
});
