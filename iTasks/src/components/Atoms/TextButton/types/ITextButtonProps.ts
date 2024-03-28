import React from "react";
import { GestureResponderEvent } from "react-native";

export type ITextButtonProps = {
  children: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  color?: string;
};
