import { useState, type FC } from 'react';
import { StyleSheet, type ViewStyle } from 'react-native';
import { Screen, ScreenContainer } from 'react-native-screens';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import useNavigatorContext from './useNavigatorContext';

type Props = {
  detachInactiveScreens?: boolean;
  style?: ViewStyle;
};

const TabbedSlot: FC<Props> = ({ detachInactiveScreens, style }) => {
  const { styles } = useStyles(stylesheet);
  const { state, descriptors } = useNavigatorContext();
  const focusedRouteKey = state.routes[state.index].key;

  const [loaded, setLoaded] = useState([focusedRouteKey]);

  if (!loaded.includes(focusedRouteKey)) {
    setLoaded([...loaded, focusedRouteKey]);
  }

  const { routes } = state;

  return (
    <ScreenContainer enabled={detachInactiveScreens} hasTwoStates style={styles.container}>
      {routes.map((route, index) => {
        const descriptor = descriptors[route.key];
        // @ts-ignore
        const { lazy = true, unmountOnBlur } = descriptor.options;
        const isFocused = state.index === index;

        if (unmountOnBlur && !isFocused) {
          return null;
        }

        if (lazy && !loaded.includes(route.key) && !isFocused) {
          // Don't render a lazy screen if we've never navigated to it
          return null;
        }

        return (
          <Screen
            key={route.key}
            activityState={isFocused ? 2 : 0}
            accessibilityElementsHidden={!isFocused}
            importantForAccessibility={isFocused ? 'auto' : 'no-hide-descendants'}
            enabled={detachInactiveScreens}
            // @ts-ignore
            freezeOnBlur={descriptor.options.freezeOnBlur}
            style={[
              StyleSheet.absoluteFill,
              { overflow: 'hidden', zIndex: isFocused ? 0 : -1 },
              style,
            ]}>
            {descriptor.render()}
          </Screen>
        );
      })}
    </ScreenContainer>
  );
};

const stylesheet = createStyleSheet({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default TabbedSlot;
