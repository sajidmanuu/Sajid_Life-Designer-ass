import { BoardState, Task, ColumnType } from "../types";

type Action =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "MOVE_TASK"; payload: { id: string; status: ColumnType } }
  | { type: "LOAD_TASKS"; payload: Task[] };

export const initialState: BoardState = { tasks: [] };

export function boardReducer(state: BoardState, action: Action): BoardState {
  switch (action.type) {
    case "ADD_TASK":
      return { tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      return { tasks: state.tasks.filter(t => t.id !== action.payload) };
    case "MOVE_TASK":
      return {
        tasks: state.tasks.map(t =>
          t.id === action.payload.id
            ? { ...t, status: action.payload.status }
            : t
        ),
      };
    case "LOAD_TASKS":
      return { tasks: action.payload };
    default:
      return state;
  }
}