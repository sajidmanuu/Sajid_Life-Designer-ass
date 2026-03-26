import { BoardProvider } from "./context/BoardContext";
import Column from "./components/Column";
import TaskForm from "./components/TaskForm";
import React from "react";

export default function App() {
  return (
    <BoardProvider>
      <div className="p-6">
        <TaskForm />
        <div className="grid grid-cols-3 gap-4">
          <Column title="To Do" type="todo" />
          <Column title="In Progress" type="inprogress" />
          <Column title="Done" type="done" />
        </div>
      </div>
    </BoardProvider>
  );
}