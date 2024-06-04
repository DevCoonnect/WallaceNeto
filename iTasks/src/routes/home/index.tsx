import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeParamList } from './types';

import Home from '../../components/Pages/Home';
import Settings from '../../components/Pages/Settings';

const Stack  = createNativeStackNavigator<HomeParamList>()

const HomeRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />

      <Stack.Screen name="settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default HomeRoutes;