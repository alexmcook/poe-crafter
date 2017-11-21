import { Action, MouseAction, OptionAction } from '../actions';

export interface InputState {
  clientX?: number;
  clientY?: number;
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
    case 'SET_ANCHOR_ITEMBOX':
      action = action as OptionAction;
      return {
        ...state,
        anchorItemBox: action.payload
      };
    default:
      return state;
  }
};
