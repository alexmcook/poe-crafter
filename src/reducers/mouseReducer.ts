import { MouseAction } from '../actions';

export interface MouseState {
  clientX?: number;
  clientY?: number;
  hoverItemRect: boolean;
}

const initialState = { hoverItemRect: false };

export default (state: MouseState = initialState, action: MouseAction) => {
  switch (action.type) {
    case 'MOUSE_MOVE':
      let nextState = state;
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
