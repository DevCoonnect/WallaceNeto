import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BootSplash from "react-native-bootsplash";

import { NativeStackParamList } from './types';
import AuthenticationRoutes from './authentication';
import HomeRoutes from './home';

const Stack = createNativeStackNavigator<NativeStackParamList>() 

const Routes: React.FC = () => {
  return (
    <NavigationContainer onReady={() => BootSplash.hide({fade: true})}>
      <Stack.Navigator initialRouteName='authentication' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="authentication" component={AuthenticationRoutes} />

        <Stack.Screen name="main" component={HomeRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;