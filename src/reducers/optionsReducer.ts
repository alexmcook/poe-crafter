import { OptionAction } from '../actions';

export interface OptionsState {
  anchorItemBox: boolean;
  displayItemInfo: boolean;
}

const initialState = { 
  anchorItemBox: false,
  displayItemInfo: false
};

export default (state: OptionsState = initialState, action: OptionAction) => {
  switch (action.type) {
    case 'SET_ANCHOR_ITEMBOX':
      return {
        ...state,
        anchorItemBox: action.payload
      };
    case 'SET_DISPLAY_ITEM_INFO':
      return {
        ...state,
        displayItemInfo: action.payload
      };
    default:
      return state;
  }
};
