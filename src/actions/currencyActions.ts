export const orbClick = (orb: string) => ({
  type: 'ORB_CLICK',
  payload: orb
});

export const essenceClick = (essence: string, tier: number) => ({
  type: 'ESSENCE_CLICK',
  payload: { essence: essence, tier: tier }
});

export const itemClick = (e: MouseEvent) => ({
  type: 'ITEM_CLICK',
  payload: e.shiftKey
});

export const keyUp = (e: KeyboardEvent) => ({
  type: 'KEY_UP',
  payload: e.keyCode
});