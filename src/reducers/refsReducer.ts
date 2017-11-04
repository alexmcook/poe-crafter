import { Action } from '../actions';

export interface RefsState {
  itemRect?: SVGRectElement;
  currentTab?: SVGSVGElement;
}

const initialState = {};

export default (state: RefsState = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_ITEM_RECT':
      return { ...state, itemRect: action.payload };
    case 'SET_CURRENT_TAB':
      return { ...state, currentTab: action.payload };
    default:
      return state;
  }
};
