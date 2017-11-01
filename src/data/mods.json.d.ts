import { Mod } from '../utils/itemInterfaces';

declare module 'mods.json' {
  export interface modsJSON {
    [key: number]: Mod;
  }
}
