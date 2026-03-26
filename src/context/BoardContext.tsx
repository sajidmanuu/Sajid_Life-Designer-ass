import React from "react";
import { createContext, useReducer, useEffect, ReactNode } from "react";
import { boardReducer, initialState } from "./reducer";
import { Task, ColumnType } from "../types";

export const BoardContext = createContext<any>(null);

export const BoardProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(boardReducer, initialState);

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data) dispatch({ type: "LOAD_TASKS", payload: JSON.parse(data) });
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  const addTask = (task: Task) => dispatch({ type: "ADD_TASK", payload: task });
  const deleteTask = (id: string) => dispatch({ type: "DELETE_TASK", payload: id });
  const moveTask = (id: string, status: ColumnType) =>
    dispatch({ type: "MOVE_TASK", payload: { id, status } });

  return (
    <BoardContext.Provider value={{ state, addTask, deleteTask, moveTask }}>
      {children}
    </BoardContext.Provider>
  );
};