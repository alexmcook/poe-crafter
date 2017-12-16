export const setForceShift = (value: boolean) => ({
  type: 'SET_FORCE_SHIFT',
  payload: value
});

export const setAnchorItemBox = (value: boolean) => ({
  type: 'SET_ANCHOR_ITEMBOX',
  payload: value
});

export const setDisplayItemInfo = (value: boolean) => ({
  type: 'SET_DISPLAY_ITEM_INFO',
  payload: value
});

export const setAtlasType = (value: string) => ({
  type: 'SET_ATLAS_TYPE',
  payload: value
});

export const reset = () => ({
  type: 'RESET',
  payload: {}
});