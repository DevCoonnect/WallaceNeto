import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './languages/i18n';

import InitialScreen from './components/Pages/InitialScreen';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import {themes} from './themes/index';
import {ThemeProvider} from './storage/context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={themes.light.primaryColor} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Initial' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Initial">
              {(props) => <InitialScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen name="Login">
              {(props) => <Login {...props} />}
            </Stack.Screen>

            <Stack.Screen name="Signup">
              {(props) => <Signup {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
}
