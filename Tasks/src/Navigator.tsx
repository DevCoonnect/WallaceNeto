import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Auth from './screens/Auth/Auth';
import TaskList from './screens/TaskList/TaskList';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Today"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Today" options={{title: 'Hoje'}}>
        {props => <TaskList {...props} daysAhead={0} />}
      </Drawer.Screen>

      <Drawer.Screen name="Tomorrow" options={{title: 'Amanhã'}}>
        {props => <TaskList {...props} daysAhead={1} />}
      </Drawer.Screen>

      <Drawer.Screen name="Week" options={{title: 'Semana'}}>
        {props => <TaskList {...props} daysAhead={7} />}
      </Drawer.Screen>

      <Drawer.Screen name="Month" options={{title: 'Mês'}}>
        {props => <TaskList {...props} daysAhead={30} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth">{props => <Auth {...props} />}</Stack.Screen>
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
