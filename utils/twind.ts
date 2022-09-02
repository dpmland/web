// Copyright © 2022 Dpm Land. All Rights Reserved.
import { IS_BROWSER } from '$fresh/runtime.ts';
import { Configuration, setup } from 'twind';
export * from 'twind';
export const config: Configuration = {
  darkMode: 'class',
  mode: 'silent',
};
if (IS_BROWSER) setup(config);
