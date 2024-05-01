import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from "react-native-bootsplash";

import AuthenticationRoutes from './authentication';
import HomeRoutes from './home';

const Routes: React.FC = () => {
  return (
    <NavigationContainer onReady={() => BootSplash.hide({fade: true})}>
      <AuthenticationRoutes />
      {/* <HomeRoutes /> */}
    </NavigationContainer>
  )
}

export default Routes;