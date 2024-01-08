import { useMemo, type FC } from 'react';
import { View, Platform } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import HeaderLogo from './HeaderLogo';
import { ResponsiveNavigatorTab } from './ResponsiveNavigator';
import SideBarTabItem from './SideBarTabItem';
import { NAV_MEDIUM_WIDTH, NAV_SMALL_WIDTH } from './constants';

type Props = {
  visible: boolean;
  tabs: ResponsiveNavigatorTab[];
};

const SideBar: FC<Props> = ({ visible, tabs }) => {
  const { styles } = useStyles(stylesheet);

  const upperTabs = useMemo(() => tabs.filter((tab) => tab.position === 'top'), [tabs]);

  const bottomTabs = useMemo(() => tabs.filter((tab) => tab.position === 'bottom'), [tabs]);

  return (
    <View style={[styles.container, !visible && { display: 'none' }]}>
      <View style={styles.sideBar}>
        <View
          // @ts-ignore
          zIndex={3}
          style={styles.wrapper}>
          <HeaderLogo />
          <View style={{ gap: 4, flex: 1 }}>
            {upperTabs.map((tab) => (
              <SideBarTabItem name={tab.name} icon={tab.icon} key={tab.id}>
                {tab.label}
              </SideBarTabItem>
            ))}
          </View>
          <View style={{ gap: 4 }}>
            {bottomTabs.map((tab) => (
              <SideBarTabItem name={tab.name} icon={tab.icon} key={tab.id}>
                {tab.label}
              </SideBarTabItem>
            ))}
          </View>
          <View />
        </View>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet(({ colors, utils, spacing }) => ({
  container: { minWidth: { xs: NAV_SMALL_WIDTH, xl: NAV_MEDIUM_WIDTH }, width: NAV_SMALL_WIDTH },
  sideBar: {
    backgroundColor: colors.elevation.surface.default,
    position: Platform.select<any>({ web: 'fixed', default: 'absolute' }),
    height: '100%',
    maxHeight: '100%',
    alignItems: { xs: 'stretch', xl: 'flex-start' },
    borderRightWidth: 1,
    borderRightColor: utils.hexToRGBA(colors.border.default, 0.2),
    minWidth: { xs: NAV_SMALL_WIDTH, xl: NAV_MEDIUM_WIDTH },
    width: { xs: NAV_SMALL_WIDTH, xl: NAV_MEDIUM_WIDTH },
    paddingTop: spacing.xs,
    paddingHorizontal: spacing.s,
    paddingBottom: spacing.l,
  },
  wrapper: {
    flex: 1,
    alignItems: { xs: 'stretch', xl: 'center' },
    height: '100%',
    justifyContent: 'space-between',
  },
}));

export default SideBar;
