import { Link } from 'expo-router';
import { type FC } from 'react';
import { Text, Pressable, Platform } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import LargeIcon from './LargeLogo';
import { LARGE_WIDTH_THRESHOLD, SMALL_WIDTH_THRESHOLD } from './constants';
import useWidth from './useWidth';

import { Icon } from '@/components/icon';

const HEADER_HEIGHT = 96;

const HeaderLogo: FC<unknown> = () => {
  const isLarge = useWidth(LARGE_WIDTH_THRESHOLD);
  const isSmall = useWidth(SMALL_WIDTH_THRESHOLD);
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Link href="/" asChild style={[styles.container, isSmall && !isLarge && styles.smallContainer]}>
      <Pressable>
        {({ hovered }) => (
          <Text style={[styles.logo(hovered)]}>
            {isLarge && <LargeIcon />}
            {!isLarge && <Icon name="sunrise" size={32} color={theme.colors.icon.subtle} />}
          </Text>
        )}
      </Pressable>
    </Link>
  );
};

const stylesheet = createStyleSheet(({ spacing, colors, utils }) => ({
  container: {
    paddingVertical: spacing.l,
    alignItems: 'flex-start',
  },
  smallContainer: {
    alignItems: 'center',
    paddingTop: spacing.none,
    minHeight: HEADER_HEIGHT,
    marginTop: spacing.s,
    paddingBottom: spacing.xl,
    height: HEADER_HEIGHT,
  },
  logo: (isHovered: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xs,
    borderRadius: spacing.max,
    backgroundColor: isHovered
      ? utils.hexToRGBA(colors.background.neutral.hovered, 0.1)
      : 'transparent',
    ...Platform.select<any>({
      web: {
        transitionProperty: ['background-color', 'box-shadow'],
        transitionDuration: '200ms',
      },
    }),
  }),
}));

export default HeaderLogo;
