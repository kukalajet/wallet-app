import { type FC } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import AppHeader from './AppHeader';
import SideBar from './SideBar';
import TabBar from './TabBar';
import TabbedNavigator from './TabbedNavigator';
import TabbedSlot from './TabbedSlot';
import { SMALL_WIDTH_THRESHOLD } from './constants';
import useWidth from './useWidth';

import type { Icons } from '@/components/icon';

export type ResponsiveNavigatorTab = {
  id: string;
  name: string;
  label: string;
  icon: Icons;
  position: 'top' | 'bottom';
};

type ResponsiveNavigatorProps = {
  tabs: ResponsiveNavigatorTab[];
};

const ResponsiveNavigator: FC<ResponsiveNavigatorProps> = ({ tabs }) => {
  const { styles } = useStyles(stylesheet);
  const isRow = useWidth(SMALL_WIDTH_THRESHOLD);

  return (
    <TabbedNavigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: 'black',
      }}>
      <View style={styles.container}>
        <SideBar visible={isRow} tabs={tabs} />
        <AppHeader visible={!isRow} />
        <TabbedSlot />
        <TabBar visible={!isRow} tabs={tabs} />
      </View>
    </TabbedNavigator>
  );
};

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    flexDirection: { xs: 'column', md: 'row' },
    backgroundColor: colors.elevation.surface.default,
  },
}));

export default ResponsiveNavigator;
