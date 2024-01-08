import breakpoints from './breakpoints';
import { lightColors, darkColors } from './colors';
import spacing from './spacing';
import typography from './typography';
import utils from './utils';

const components = { typography } as const;

const sharedTheme = { spacing, utils, components, breakpoints } as const;

const lightTheme = { colors: lightColors, ...sharedTheme } as const;
const darkTheme = { colors: darkColors, ...sharedTheme } as const;

export { lightTheme, darkTheme };
