import { FC } from 'react';
import { View, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Icon } from '@/components/icon';

const LargeIcon: FC = () => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Icon name="sunrise" size={32} color={theme.colors.icon.subtle} style={styles.logo} />
      <Text style={styles.header}>hapseer</Text>
    </View>
  );
};

const stylesheet = createStyleSheet(({ spacing, colors }) => ({
  container: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: spacing.m },
  logo: { paddingEnd: spacing.m },
  header: {
    fontSize: spacing.xl,
    fontWeight: 'bold',
    color: colors.icon.subtle,
    fontFamily: 'Lato_700Bold',
  },
}));

export default LargeIcon;
