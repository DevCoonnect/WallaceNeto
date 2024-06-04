type UserAuth = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  stageNew: boolean;
};

type TaskType = {
  id: number;
  desc: String;
  estimateAt: Date;
  doneAt?: Date;
  onToggleTask?: (id: number) => void;
  onDelete?: (id: number) => void;
};

export type {UserAuth, TaskType};
