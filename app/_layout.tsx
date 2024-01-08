import {
  ResponsiveNavigator,
  type ResponsiveNavigatorTab,
} from '@/components/responsive-navigator';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import '@/styles/unistyles';
import { useConfigStore } from '@/store/config';
import { UnistylesRuntime } from 'react-native-unistyles';

const tabs: ResponsiveNavigatorTab[] = [
  {
    name: 'index',
    id: 'index',
    label: 'Home',
    icon: 'home',
    position: 'top',
  },
  {
    name: 'explore',
    id: 'explore',
    label: 'Explore',
    icon: 'navigation',
    position: 'top',
  },
  {
    name: 'more',
    id: 'more',
    label: 'More',
    icon: 'menu',
    position: 'bottom',
  },
];

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { themeMode } = useConfigStore();
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    UnistylesRuntime?.setTheme(themeMode);
  }, [themeMode]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ResponsiveNavigator tabs={tabs} />
    </ThemeProvider>
  );
}
