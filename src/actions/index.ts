import { CraftingOption } from '../reducers/craftingOptionReducer';
import Mod from '../utils/mod';

export type Action =
  | DefaultAction
  | NumberAction
  | EssenceAction
  | MouseAction
  | CraftAction
  | CraftScrollAction
  | OptionAction;

export type DefaultAction = {
  type: string;
  payload: string;
};

export type NumberAction = {
  type: string;
  payload: number;
};

export type EssenceAction = {
  type: string;
  payload: { essence: string; tier: number };
};

export type MouseAction = {
  type: string;
  payload: { x: number; y: number };
};

export type CraftAction = {
  type: string;
  payload: CraftingOption;
};

export type CraftScrollAction = {
  type: string;
  payload: { scrollerPos: number; optionsPos: number };
};

export type OptionAction = {
  type: string;
  payload: boolean;
};

export type AffixAction = {
  type: string;
  payload: Mod;
};