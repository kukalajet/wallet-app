import { View, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const MainPage = () => {
  const { styles } = useStyles(stylesheet);
  // const { themeMode, setThemeMode } = useConfigStore();

  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
    </View>
  );
};

const stylesheet = createStyleSheet(({ colors }) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: colors.elevation.surface.default,
  },
}));

export default MainPage;
