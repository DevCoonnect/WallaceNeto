import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Type Stack
export type NativeStackParamList = {
  authentication: undefined;
  main: undefined;
};

// Type Navigation
export type IStackNavigation = NativeStackNavigationProp<NativeStackParamList>;
