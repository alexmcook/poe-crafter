import { Action } from '../actions';
import Mod from '../utils/mod';
import * as _ from 'lodash';
const craftingOptions: CraftingOption[] = require('../data/craftingOptions.json');

enum Master {
  VORICI = 0,
  TORA = 1,
  CATARINA = 2,
  ZANA = 3,
  VAGAN = 4,
  ELREON = 5,
  HAKU = 6,
  LEO = 7
}

export interface CustomAction {
  removeMod: boolean;
  sockets: number;
  colors: string;
  links: number;
}

export interface CraftingOption {
  name: string;
  text: string;
  order: number;
  mod: Mod;
  costItem: string;
  costValue: number;
  master: number;
  masterLevel: number;
  itemTypes: string[];
  customAction: CustomAction;
}

export interface CraftingOptionsState {
  haku: CraftingOption[];
  elreon: CraftingOption[];
  catarina: CraftingOption[];
  vagan: CraftingOption[];
  tora: CraftingOption[];
  leo: CraftingOption[];
  vorici: CraftingOption[];
}

const initialState = {
  haku: _.filter(craftingOptions, option => {
    return option.master === Master.HAKU;
  }),
  elreon: _.filter(craftingOptions, option => {
    return option.master === Master.ELREON;
  }),
  catarina: _.filter(craftingOptions, option => {
    return option.master === Master.CATARINA;
  }),
  vagan: _.filter(craftingOptions, option => {
    return option.master === Master.VAGAN;
  }),
  tora: _.filter(craftingOptions, option => {
    return option.master === Master.TORA;
  }),
  leo: _.filter(craftingOptions, option => {
    return option.master === Master.LEO;
  }),
  vorici: _.filter(craftingOptions, option => {
    return option.master === Master.VORICI;
  })
};

export default (state: CraftingOptionsState = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
