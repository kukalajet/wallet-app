import { UnistylesRegistry } from 'react-native-unistyles';

import breakpoints from './breakpoints';
import { darkTheme, lightTheme } from './theme';

type AppBreakpoints = typeof breakpoints;
type AppThemes = { light: typeof lightTheme; dark: typeof darkTheme };

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({ light: lightTheme, dark: darkTheme })
  .addBreakpoints(breakpoints)
  .addConfig({ adaptiveThemes: true });
