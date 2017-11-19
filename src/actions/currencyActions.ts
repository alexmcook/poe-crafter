import { CraftingOption } from '../reducers/craftingOptionReducer';

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

export const craftClick = (option: CraftingOption) => ({
  type: 'CRAFT_CLICK',
  payload: option
});

export const optionClick = (option?: CraftingOption) => ({
  type: 'OPTION_CLICK',
  payload: option
});

export const keyUp = (e: React.KeyboardEvent<SVGSVGElement>) => ({
  type: 'KEY_UP',
  payload: e.keyCode
});