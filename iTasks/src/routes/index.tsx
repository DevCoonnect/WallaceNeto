import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthenticationRoutes from './authentication';
import HomeRoutes from './home';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthenticationRoutes />
      {/* <HomeRoutes /> */}
    </NavigationContainer>
  )
}

export default Routes;