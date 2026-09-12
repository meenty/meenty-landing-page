import * as migration_20260906_174814 from './20260906_174814';
import * as migration_20260912_103500 from './20260912_103500';

export const migrations = [
  {
    up: migration_20260906_174814.up,
    down: migration_20260906_174814.down,
    name: '20260906_174814'
  },
  {
    up: migration_20260912_103500.up,
    down: migration_20260912_103500.down,
    name: '20260912_103500'
  },
];
