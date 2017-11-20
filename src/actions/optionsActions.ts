export const setForceShift = (value: boolean) => ({
  type: 'SET_FORCE_SHIFT',
  payload: value
});

export const setAnchorItemBox = (value: boolean) => ({
  type: 'SET_ANCHOR_ITEMBOX',
  payload: value
});

export const reset = () => ({
  type: 'RESET',
  payload: {}
});