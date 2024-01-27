/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Auth from './src/screens/Auth/Auth';
// import TaskList from './src/screens/TaskList/TaskList';

AppRegistry.registerComponent(appName, () => Auth);
