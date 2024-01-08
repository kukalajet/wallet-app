import { type FC } from 'react';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { ResponsiveNavigatorTab } from './ResponsiveNavigator';
import TabBarIcon from './TabBarIcon';
import TabBarItem from './TabBarItem';

type Props = {
  visible: boolean;
  tabs: ResponsiveNavigatorTab[];
};

const TabBar: FC<Props> = ({ visible, tabs }) => {
  const { styles } = useStyles(stylesheet);
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[{ paddingBottom: bottom }, { display: visible ? 'flex' : 'none' }]}>
      <View style={styles.nav}>
        {tabs.map((tab, index) => (
          <TabBarItem id={tab.id} name={tab.name} key={tab.name}>
            {({ focused, pressed, hovered }) => (
              <View key={index} style={styles.hoveredWrapper(focused)}>
                <TabBarIcon
                  name={tab.icon}
                  focused={focused}
                  // @ts-ignore
                  style={[
                    styles.icon,
                    pressed && styles.pressedIcon,
                    Platform.select({
                      web: {
                        transitionDuration: '100ms',
                        transform: hovered ? [{ scale: 1.1 }] : [{ scale: 1 }],
                      },
                    }),
                  ]}
                />
              </View>
            )}
          </TabBarItem>
        ))}
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet(({ colors, utils, spacing }) => ({
  nav: {
    backgroundColor: colors.elevation.surface.default,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: utils.hexToRGBA(colors.border.default, 0.2),
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.xxs,
  },
  icon: { padding: spacing.none },
  pressedIcon: { transform: [{ scale: 0.9 }], opacity: 0.8 },
  hoveredWrapper: (isFocused: boolean) => ({
    overflow: 'hidden',
    backgroundColor: isFocused ? colors.background.selected.default : undefined,
    borderRadius: spacing.max,
    padding: spacing.s,
  }),
}));

export default TabBar;
