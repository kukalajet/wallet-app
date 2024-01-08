import { type FC } from 'react';
import { View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import LargeIcon from './LargeLogo';

type Props = {
  visible: boolean;
};

const AppHeader: FC<Props> = ({ visible }) => {
  const { styles, theme } = useStyles(stylesheet);
  const { top } = useSafeAreaInsets();

  const { spacing } = theme;
  const height = top + spacing['4xl'];

  return (
    <>
      <View style={{ height }} />
      <View style={[!visible && { display: 'none' }, { height, paddingTop: top }, styles.header]}>
        <LargeIcon />
      </View>
    </>
  );
};

const stylesheet = createStyleSheet(({ colors, utils, spacing }) => ({
  header: {
    zIndex: spacing['5xl'],
    backgroundColor: colors.elevation.surface.default,
    position: Platform.select<any>({ web: 'fixed', default: 'absolute' }),
    top: spacing.none,
    left: spacing.none,
    right: spacing.none,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: utils.hexToRGBA(colors.border.default, 0.2),
  },
}));

export default AppHeader;
