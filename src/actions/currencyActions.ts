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

export const affixClickAdd = (id: string) => ({
  type: 'AFFIX_CLICK_ADD',
  payload: id
});

export const affixClickRemove = (id: string) => ({
  type: 'AFFIX_CLICK_REMOVE',
  payload: id
});

export const keyUp = (e: KeyboardEvent) => ({
  type: 'KEY_UP',
  payload: e.keyCode
});