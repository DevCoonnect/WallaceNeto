import React from "react";

export type IHeaderProps = {
  color?: string;
  onReturn?: () => void;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode; 
}