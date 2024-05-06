export interface IBoardListItem {
  id: number;
  title: string;
  content: string;
  create_TIME: string;
  visible: boolean;
}

export interface ISignUpFormData {
  name: string;
  email: string;
  password: string;
}

export interface IBoardFormData {
  title: string;
  content: string;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IBoardDetailView {
  index: string | undefined;
  title: string;
  content: string;
}
