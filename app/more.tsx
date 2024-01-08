import { useBearStore } from '@/store/bear';
import { View, Text, Button } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const MorePage = () => {
  const { styles } = useStyles(stylesheet);
  const { increase, removeAll } = useBearStore();

  return (
    <View style={styles.container}>
      <Text>More Screen</Text>
      <Button title="Increase by 8" onPress={() => increase(8)} />
      <Button title="Remove All" onPress={removeAll} />
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
