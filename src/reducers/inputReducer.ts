import { Action, MouseAction, OptionAction } from '../actions';

export interface InputState {
  clientX?: number;
  clientY?: number;
  hoverItemRect: boolean;
  anchorItemBox: boolean;
}

const initialState = { hoverItemRect: false, anchorItemBox: false };

export default (state: InputState = initialState, action: Action) => {
  switch (action.type) {
    case 'MOUSE_MOVE':
      let nextState = state;
      action = action as MouseAction;
      if (action.payload) {
        nextState = {
          ...state,
          clientX: action.payload.x,
          clientY: action.payload.y
        };
      }
      return nextState;
    case 'ITEM_RECT_MOUSE_ENTER':
      return { ...state, hoverItemRect: true };
    case 'ITEM_RECT_MOUSE_LEAVE':
      return { ...state, hoverItemRect: state.anchorItemBox ? true : false };
    case 'SET_ANCHOR_ITEMBOX':
      action = action as OptionAction;
      return {
        ...state,
        hoverItemRect: action.payload,
        anchorItemBox: action.payload
      };
    default:
      return state;
  }
};
