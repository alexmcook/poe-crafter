import Base from '../utils/base';

declare module 'bases.json' {
  export interface basesJSON {
    [key: number]: Base;
  }
}
