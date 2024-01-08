import { useWindowDimensions } from 'react-native';

function useWidth(size: number) {
  const { width } = useWindowDimensions();

  if (typeof window === 'undefined') return true;

  return width >= size;
}

export default useWidth;
