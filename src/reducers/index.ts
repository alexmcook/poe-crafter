import { combineReducers } from 'redux';
import item, { ItemState } from './itemReducer';
import mouse, { MouseState } from './mouseReducer';
import refs, { RefsState } from './refsReducer';
import tab, { TabState } from './tabReducer';

export interface State {
  item: ItemState;
  mouse: MouseState;
  refs: RefsState;
  tab: TabState;
}

export default combineReducers({
  item,
  mouse,
  refs,
  tab
});
