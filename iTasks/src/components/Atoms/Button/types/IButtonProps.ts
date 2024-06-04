import React from "react";
import { GestureResponderEvent } from "react-native";

export type IButtonProps = {
  children: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  outlined?: boolean;
  rounded?: boolean;
  color?: string;
  textColor?: string;
  disabled?: boolean;
};
