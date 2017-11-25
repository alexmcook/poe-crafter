import { Action, MouseAction } from '../actions';

export interface InputState {
  clientX?: number;
  clientY?: number;
}

const initialState = {};

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
    default:
      return state;
  }
};
