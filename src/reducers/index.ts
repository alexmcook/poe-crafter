import { combineReducers } from 'redux';
import item, { ItemState } from './itemReducer';
import mouse, { MouseState } from './mouseReducer';
import refs, { RefsState } from './refsReducer';
import tab, { TabState } from './tabReducer';
import craftingOptions, { CraftingOptionsState } from './craftingOptionReducer';

export interface State {
  item: ItemState;
  mouse: MouseState;
  refs: RefsState;
  tab: TabState;
  craftingOptions: CraftingOptionsState;
}

export default combineReducers({
  item,
  mouse,
  refs,
  tab,
  craftingOptions
});
