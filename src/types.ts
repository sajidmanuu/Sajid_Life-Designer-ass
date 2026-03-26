export type ColumnType = "todo" | "inprogress" | "done";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: ColumnType;
}

export interface BoardState {
  tasks: Task[];
}