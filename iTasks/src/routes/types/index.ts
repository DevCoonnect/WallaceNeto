import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Type Stack
export type NativeStackParamList = {
  login: undefined;
  tab: undefined;
};

// Type Navigation
export type IStackNavigation = NativeStackNavigationProp<NativeStackParamList>;
