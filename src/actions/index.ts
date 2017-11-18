import { CraftingOption } from '../reducers/craftingOptionReducer';
export type Action = DefaultAction | EssenceAction | MouseAction | CraftAction;

export type DefaultAction = {
  type: string;
  payload: string;
};

export type EssenceAction = {
  type: string;
  payload: { essence: string, tier: number };
};

export type MouseAction = {
  type: string;
  payload: { x: number; y: number };
};

export type CraftAction = {
  type: string;
  payload: CraftingOption;
};
