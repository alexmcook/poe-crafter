export const orbClick = (orb: string) => ({
  type: 'ORB_CLICK',
  payload: orb
});

export const itemClick = (e: React.MouseEvent<SVGRectElement>) => ({
  type: 'ITEM_CLICK',
  payload: e.nativeEvent.shiftKey
});