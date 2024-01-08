import { TabRouter } from '@react-navigation/native';
import { Navigator } from 'expo-router';
import { type ComponentProps, type FC } from 'react';

type Props = ComponentProps<typeof Navigator>;

const TabbedNavigator: FC<Props> = (props) => {
  return <Navigator {...props} router={TabRouter} />;
};

export default TabbedNavigator;
