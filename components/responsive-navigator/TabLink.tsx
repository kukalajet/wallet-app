import { CommonActions } from '@react-navigation/native';
import { Link, type Href } from 'expo-router';
import { type FC } from 'react';

import useContextRoute from './useContextRoute';
import useLinkBuilder from './useLinkBuilder';

type Props = {
  name: string;
} & Omit<React.ComponentProps<typeof Link>, 'href' | 'onPress' | 'onLongPress'>;

const TabLink: FC<Props> = ({ name, ...props }) => {
  const buildLink = useLinkBuilder();
  const contextRoute = useContextRoute(name);

  if (!contextRoute) {
    return null;
  }

  const { route, target, navigation } = contextRoute;
  const link = buildLink(name);

  const onPress = (event: any) => {
    const navigationEvent = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    // @ts-ignore
    if (!navigationEvent.defaultPrevented) {
      event.preventDefault();
      navigation.dispatch({
        ...CommonActions.navigate({ name: route.name, merge: true }),
        target,
      });
    }
  };

  const onLongPress = () => {
    navigation.emit({ type: 'tabLongPress', target: route.key });
  };

  return (
    <Link
      {...props}
      href={link as Href<string>}
      // @ts-ignore
      onPress={onPress}
      onLongPress={onLongPress}
    />
  );
};

export default TabLink;
