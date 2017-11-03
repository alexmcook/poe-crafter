import { combineReducers } from 'redux';
import item, { ItemState } from './itemReducer';
import mouse, { MouseState } from './mouseReducer';
import refs, { RefsState } from './refsReducer';

export interface State {
  item: ItemState;
  mouse: MouseState;
  refs: RefsState;
}

export default combineReducers({
  item,
  mouse,
  refs
});
