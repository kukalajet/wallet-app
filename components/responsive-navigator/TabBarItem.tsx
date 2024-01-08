import { Link, type Href } from 'expo-router';
import { type ReactNode, type FC } from 'react';
import { Pressable, type ViewStyle } from 'react-native';

import TabLink from './TabLink';
import useIsTabSelected from './useIsTabSelected';

type Props = {
  id: string;
  name: string;
  children: (props: { focused: boolean; pressed: boolean; hovered: boolean }) => ReactNode;
  style?: ViewStyle;
};

const TabBarItem: FC<Props> = ({ id, name, children, style }) => {
  // Not sure this is the best solution. For the moment seems to be good enough.
  const currentTab = id.startsWith('/') ? id.substring(1) : id;
  const focused = useIsTabSelected(currentTab);

  if (name.startsWith('/') || name.startsWith('.')) {
    return (
      <Link href={name as Href<string>} asChild style={style}>
        <Pressable>{(props) => children({ ...props, focused })}</Pressable>
      </Link>
    );
  }

  return (
    <TabLink name={id} asChild style={style}>
      <Pressable>{(props) => children({ ...props, focused })}</Pressable>
    </TabLink>
  );
};

export default TabBarItem;
