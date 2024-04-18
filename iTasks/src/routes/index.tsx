import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LoginRoutes from './login';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <LoginRoutes />
    </NavigationContainer>
  )
}

export default Routes;