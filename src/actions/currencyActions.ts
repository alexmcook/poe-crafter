export const orbClick = (orb: string) => ({
  type: 'ORB_CLICK',
  payload: orb
});

export const essenceClick = (essence: string, tier: number) => ({
  type: 'ESSENCE_CLICK',
  payload: { essence: essence, tier: tier }
});

export const itemClick = (e: React.MouseEvent<SVGRectElement>) => ({
  type: 'ITEM_CLICK',
  payload: e.nativeEvent.shiftKey
});