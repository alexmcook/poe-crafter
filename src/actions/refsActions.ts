export const setItemRect = (rect: SVGRectElement) => ({
  type: 'SET_ITEM_RECT',
  payload: rect
});

export const setCurrentTab = (currentTab: SVGSVGElement) => ({
  type: 'SET_CURRENT_TAB',
  payload: currentTab
});