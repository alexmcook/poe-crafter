import { combineReducers } from 'redux';
import item, { ItemState } from './itemReducer';
import input, { InputState } from './inputReducer';
import refs, { RefsState } from './refsReducer';
import tab, { TabState } from './tabReducer';
import craftingOptions, { CraftingOptionsState } from './craftingOptionReducer';

export interface State {
  item: ItemState;
  input: InputState;
  refs: RefsState;
  tab: TabState;
  craftingOptions: CraftingOptionsState;
}

export default combineReducers({
  item,
  input,
  refs,
  tab,
  craftingOptions
});
