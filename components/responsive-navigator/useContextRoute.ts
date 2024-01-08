import { Navigator } from 'expo-router';

function useContextRoute(name: string) {
  const { state, navigation, descriptors } = Navigator.useContext();

  const current = state.routes.find((route) => route.name === name);

  if (!current) {
    const options = state.routes.map((r) => r.name).join(', ');
    console.warn(`Could not find route with name: ${name}. Options: ${options}`);
  }

  if (!current) {
    return null;
  }

  return {
    route: current,
    target: state.key,
    navigation,
    descriptor: descriptors[current.key],
  };
}

export default useContextRoute;
