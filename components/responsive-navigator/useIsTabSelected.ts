import useNavigatorContext from './useNavigatorContext';

function useIsTabSelected(name: string): boolean {
  const { navigation } = useNavigatorContext();

  const state = navigation.getState();
  const current = state.routes.find((_, index) => state.index === index);

  return current?.name === name;
}

export default useIsTabSelected;
