import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Type Stack
export type HomeParamList = {
  home: undefined;
  settings: undefined;
};

// Type Navigation
export type IStackNavigation = NativeStackNavigationProp<HomeParamList>;
