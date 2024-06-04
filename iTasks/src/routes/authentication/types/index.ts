import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Type Stack
export type LoginParamList = {
  initial: undefined;
  signin: undefined;
  signup: undefined;
};

// Type Navigation
export type IStackNavigation = NativeStackNavigationProp<LoginParamList>;
