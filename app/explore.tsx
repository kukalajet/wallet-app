import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const ExplorePage = () => {
  const { styles } = useStyles(stylesheet);
  // const { themeMode, setThemeMode } = useConfigStore();

  return <View style={[styles.container]} />;
};

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: colors.elevation.surface.default,
  },
}));

export default ExplorePage;