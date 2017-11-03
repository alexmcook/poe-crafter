export const setItemRect = (rect: SVGRectElement) => ({
  type: 'SET_ITEM_RECT',
  payload: rect
});

export const setCurrencyTab = (currencyTab: SVGSVGElement) => ({
  type: 'SET_CURRENCY_TAB',
  payload: currencyTab
});