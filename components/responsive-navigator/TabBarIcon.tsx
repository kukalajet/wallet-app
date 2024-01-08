import { type FC } from 'react';
import { type ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Icon, type Icons } from '@/components/icon';

type Props = {
  name: Icons;
  focused?: boolean;
  hovered?: boolean;
  style?: ViewStyle;
};

const TabBarIcon: FC<Props> = ({ name, focused, hovered, style }) => {
  const {
    styles,
    theme: { colors },
  } = useStyles(stylesheet);

  return (
    <Icon
      name={name}
      size={24}
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      color={focused || hovered ? colors.icon.selected : colors.icon.subtle}
      style={[styles.icon, style]}
    />
  );
};

const stylesheet = createStyleSheet({
  icon: { alignSelf: 'center' },
});

export default TabBarIcon;
