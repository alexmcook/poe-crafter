import Mod from '../utils/mod';

declare module 'mods.json' {
  export interface modsJSON {
    [key: number]: Mod;
  }
}
