import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginParamList } from './types';

import InitialScreen from '../../components/Pages/Login/InitialScreen';
import Signin from '../../components/Pages/Login/Signin';
import Signup from '../../components/Pages/Login/Signup';

const Stack  = createNativeStackNavigator<LoginParamList>()

const LoginRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='initial' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="initial" component={InitialScreen} />

      <Stack.Screen name="signin" component={Signin} /> 

      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default LoginRoutes;