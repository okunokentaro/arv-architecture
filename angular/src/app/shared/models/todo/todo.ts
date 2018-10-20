type Status = 'active' | 'done' | 'archived';

export interface Todo {
  id: number;
  status: Status;
  title: string;
  created: number;
  modified: number;
}
