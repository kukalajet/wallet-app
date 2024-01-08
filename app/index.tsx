import { useBearStore } from '@/store/bear';
import { View, Text, Button } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { create } from 'zustand';

const MainPage = () => {
  const { styles } = useStyles(stylesheet);
  const { bears, increase, removeAll } = useBearStore();

  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <Text>Amount of bears: {bears}</Text>
      <Button title="Increase by 2" onPress={() => increase(2)} />
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

export default MainPage;
