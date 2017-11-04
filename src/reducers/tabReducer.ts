import { Action } from '../actions';

enum Tab {
  CURRENCY = 'Currency',
  ESSENCE = 'Essence',
  CRAFTING = 'Crafting'
}

export interface TabState {
  currentTab: string;
}

const initialState = {
  currentTab: Tab.CURRENCY
};

export default (state: TabState = initialState, action: Action) => {
  switch (action.type) {
    case 'CHANGE_TAB':
      return { ...state, currentTab: action.payload };
    default:
      return state;
  }
};
