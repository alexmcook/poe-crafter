import { CraftingOption } from '../reducers/craftingOptionReducer';

export const optionClick = (option?: CraftingOption) => ({
  type: 'OPTION_CLICK',
  payload: option
});

export const craftClick = (option: CraftingOption) => ({
  type: 'CRAFT_CLICK',
  payload: option
});

export const masterClick = (master: string) => ({
  type: 'MASTER_CLICK',
  payload: master
});
