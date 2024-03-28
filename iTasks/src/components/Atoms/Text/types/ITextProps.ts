import React from "react";
import { StyleProp, TextStyle } from "react-native";

export type ITextProps = {
  children: React.ReactNode;
  styles?: StyleProp<TextStyle>;
  size?: number;
  color?: string;
  bold?: boolean;
};
