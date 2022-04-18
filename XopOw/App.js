import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Compass from "./screens/Compass";
import Home from "./screens/Home";
import Coordinates from "./screens/Coordinates";

export const SCREEN_HOME = "Home"
export const SCREEN_COMPASS = "Compass"
export const SCREEN_COORDINATES = "Coordinates"

const Tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name) {
                case SCREEN_HOME : iconName = "home-sharp"; break;
                case SCREEN_COMPASS : iconName = "map-sharp"; break;
                case SCREEN_COORDINATES : iconName = "camera-sharp"; break;
                default: iconName = "information-circle";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "gold",
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name={SCREEN_HOME} component={Home} options={{ title: 'Home', headerStyle: { backgroundColor: '#f4511e' } }} />
          <Tab.Screen name={SCREEN_COMPASS} component={Compass} options={{ title: 'Map' }} />
          <Tab.Screen name={SCREEN_COORDINATES} component={Coordinates} options={{ title: 'Coordinates' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

