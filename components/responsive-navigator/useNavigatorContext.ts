import { TabRouter } from '@react-navigation/native';
import { Navigator } from 'expo-router';

function useNavigatorContext() {
  const context = Navigator.useContext();

  if (process.env.NODE_ENV !== 'production') {
    if (context.router.name !== 'TabRouter' && context.router instanceof TabRouter) {
      throw new Error(
        'useTabbedSlot must be used inside a Navigator with a tab router: <Navigator route={TabRouter} />',
      );
    }
  }

  return context;
}

export default useNavigatorContext;
