import * as _ from 'lodash';
import Mod, { GenerationType, Domain } from './mod';

/* Filter mods to include only mods with a shared tag that have a spawnWeight greater than value */
export function filterSpawnWeightTagsMatch(mods: {}, tags: string[]): Mod[] {
  return _.filter(mods, (mod: Mod) => {
    let tag = _.intersection(Object.keys(mod.spawnWeights), tags)[0];
    if (tag) {
      return mod.spawnWeights[tag] > 0;
    } else {
      return false;
    }
  });
}

/* Filter mods to exclude mods with a shared tag (except default) that has a weight of 0 */
export function filterSpawnWeightAnyIsZero(mods: {}, tags: string[]): Mod[] {
  return _.filter(mods, (mod: Mod) => {
    let bool = true;
    _.each(mod.spawnWeights, (value, key) => {
      if (_.includes(tags, key) && value === 0 && key !== 'default') {
        bool = false;
        return false;
      } else {
        return true;
      }
    });
    return bool;
  });
}

/* Filter mods to include only mods with a PREFIX or SUFFIX generationType */
export function filterGenerationType(mods: {}): Mod[] {
  return _.filter(mods, (mod: Mod) => {
    return (
      mod.generationType === GenerationType.PREFIX ||
      mod.generationType === GenerationType.SUFFIX
    );
  });
}

/* Filter mods to include only mods with a domain based on item category */
export function filterDomain(mods: {}, category: string): Mod[] {
  return _.filter(mods, (mod: Mod) => {
    if (category === 'Other') {
      return mod.domain === Domain.JEWEL;
    } else {
      return mod.domain === Domain.ITEM;
    }
  });
}