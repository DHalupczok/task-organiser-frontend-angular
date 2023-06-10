export interface IProject {
  id: string;
  name: string;
  isSelected?: boolean;
}

export enum ERepeatability {
  none,
  daily,
  weakly,
  monthly,
}

export interface ITask {
  id: string;
  projectId: string;
  typeId: string;
  title: string;
  startDate: Date;
  stopDate: Date;
  repeatability: ERepeatability;
  content: string;
}

export interface IType {
  id: string;
  projectId: string;
  name: string;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  surname: string;
  password: string;
}

export type TStatus = 'pending' | 'loading' | 'error' | 'success';
