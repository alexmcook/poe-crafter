import { Action } from '../actions';

export interface RefsState {
  itemRect?: SVGRectElement;
  currencyTab?: SVGSVGElement;
}

const initialState = {};

export default (state: RefsState = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_ITEM_RECT':
      return { ...state, itemRect: action.payload };
    case 'SET_CURRENCY_TAB':
      return { ...state, currencyTab: action.payload };
    default:
      return state;
  }
};
