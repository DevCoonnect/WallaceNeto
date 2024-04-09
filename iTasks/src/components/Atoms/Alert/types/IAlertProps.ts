import React from "react";

export type IAlertProps = {
  children: React.ReactNode;
  visibility: boolean;
  type?: string;
  color?: string;
};