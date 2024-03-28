import React from "react";
import { GestureResponderEvent } from "react-native";

type ITextButtonProps = {
  children: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  color?: string;
};

export type {ITextButtonProps};