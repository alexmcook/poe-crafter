import { Action, MouseAction } from '../actions';

export interface InputState {
  clientX?: number;
  clientY?: number;
  hoverItemRect: boolean;
}

const initialState = { hoverItemRect: false };

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
      return { ...state, hoverItemRect: false };
    default:
      return state;
  }
};
