import { combineReducers } from 'redux';
import item, { ItemState } from './itemReducer';
import input, { InputState } from './inputReducer';
import tab, { TabState } from './tabReducer';
import options, { OptionsState } from './optionsReducer';
import craftingOptions, { CraftingOptionsState } from './craftingOptionReducer';

export interface State {
  item: ItemState;
  input: InputState;
  tab: TabState;
  options: OptionsState;
  craftingOptions: CraftingOptionsState;
}

export default combineReducers({
  item,
  input,
  tab,
  options,
  craftingOptions
});
