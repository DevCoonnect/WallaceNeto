import React from "react";

export type ITextInputProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>
  type?: 'email' | 'password';
  color?: string;
  icon?: string;
  placeholder?: string;
};