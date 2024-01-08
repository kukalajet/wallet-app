import { Feather } from '@expo/vector-icons';
import type { FC } from 'react';
import type { StyleProp, TextStyle } from 'react-native';

export type Icons = keyof typeof Feather.glyphMap;

type Props = {
  name: Icons;
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
};

const Icon: FC<Props> = ({ name, color, size, style }) => (
  <Feather name={name} size={size} color={color} style={style} />
);

export default Icon;
