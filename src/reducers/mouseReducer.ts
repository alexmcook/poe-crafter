import { MouseAction } from '../actions';

export interface MouseState {
  clientX?: number;
  clientY?: number;
}

const initialState = {};

export default (state: MouseState = initialState, action: MouseAction) => {
  switch (action.type) {
    case 'MOUSE_MOVE':
      let nextState = state;
      if (action.payload) {
        nextState = { clientX: action.payload.x, clientY: action.payload.y };
      }
      return nextState;
    default:
      return state;
  }
};
