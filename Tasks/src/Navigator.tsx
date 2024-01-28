import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Auth from './screens/Auth/Auth';
import TaskList from './screens/TaskList/TaskList';

const mainRoutes = {
  Auth: {
    name: 'Auth',
    screen: Auth,
  },
  Home: {
    name: 'Home',
    screen: TaskList,
  },
};

const mainNavigator = createSwitchNavigator(mainRoutes, {
  initialRouteName: 'Auth',
});

export default createAppContainer(mainNavigator);
