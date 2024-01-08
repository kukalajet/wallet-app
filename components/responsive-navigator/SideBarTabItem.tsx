import { type PropsWithChildren, type FC } from 'react';
import { View, Text, Platform } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { UnistylesTheme } from 'react-native-unistyles/lib/typescript/src/types';

import TabBarIcon from './TabBarIcon';
import TabBarItem from './TabBarItem';

import type { Icons } from '@/components/icon';

type Props = {
  name: string;
  icon: Icons;
} & PropsWithChildren;

const SideBarTabItem: FC<Props> = ({ name, icon, children }) => {
  const { styles } = useStyles(stylesheet);

  return (
    // @ts-expect-error
    <TabBarItem id={name} name={name} accessibilityHasPopup="menu" style={styles.container}>
      {({ focused, hovered }) => (
        <View style={styles.wrapper(hovered, focused)}>
          <View style={styles.icon(hovered)}>
            <TabBarIcon name={icon} focused={focused} hovered={hovered} />
          </View>
          <Text style={styles.label(hovered, focused)}>{children}</Text>
        </View>
      )}
    </TabBarItem>
  );
};

const getBackgroundColor = (
  isHovered: boolean,
  isFocused: boolean,
  colors: UnistylesTheme['colors'],
): string => {
  if (isHovered) return colors.background.selected.hovered;
  if (isFocused) return colors.background.selected.default;
  return 'transparent';
};

const getLabelColor = (
  isHovered: boolean,
  isFocused: boolean,
  colors: UnistylesTheme['colors'],
) => {
  if (isHovered || isFocused) return colors.text.selected;
  return colors.text.subtle;
};

const getLabelFontWeight = (isHovered: boolean, isFocused: boolean) => {
  if (isHovered || isFocused) return 'bold';
  return 'normal';
};

const stylesheet = createStyleSheet(({ colors, spacing }) => ({
  container: {
    width: '100%',
    paddingVertical: spacing.xxs,
  },
  wrapper: (isHovered: boolean, isFocused: boolean) => ({
    backgroundColor: getBackgroundColor(isHovered, isFocused, colors),
    padding: spacing.s,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: spacing.max,
    ...Platform.select<any>({
      web: {
        transitionDuration: '200ms',
        transitionProperty: ['background-color', 'box-shadow'],
      },
    }),
  }),
  icon: (isHovered: boolean) => ({
    transitionTimingFunction: 'cubic-bezier(0.17, 0.17, 0, 1)',
    transform: [{ scale: isHovered ? 1.1 : 1 }],
    ...Platform.select<any>({
      web: {
        transitionDuration: '150ms',
        transitionProperty: ['transform'],
      },
    }),
  }),
  label: (isHovered: boolean, isFocused: boolean) => ({
    color: getLabelColor(isHovered, isFocused, colors),
    fontSize: spacing.m,
    marginLeft: spacing.m,
    marginRight: spacing.m,
    lineHeight: spacing.xl,
    fontWeight: getLabelFontWeight(isHovered, isFocused),
    display: {
      xs: 'none',
      xl: 'flex',
    },
  }),
  focusedLabel: { color: colors.text.selected, fontWeight: 'bold' },
  hoveredLabel: { color: colors.text.selected, fontWeight: 'bold' },
}));

export default SideBarTabItem;
