import { View, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const MorePage = () => {
  const { styles } = useStyles(stylesheet);
  // const { themeMode, setThemeMode } = useConfigStore();

  return (
    <View style={styles.container}>
      <Text>More Screen</Text>
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

export default MorePage;
