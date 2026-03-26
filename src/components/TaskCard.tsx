import React from "react";
import { Task } from "../types";
import { useContext } from "react";
import { BoardContext } from "../context/BoardContext";

export default function TaskCard({ task }: { task: Task }) {
  const { deleteTask, moveTask } = useContext(BoardContext);

  return (
    <div className="bg-white p-3 rounded shadow mb-2">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>

      <div className="flex justify-between mt-2">
        <button onClick={() => deleteTask(task.id)} className="text-red-500 text-xs">
          Delete
        </button>
        <div className="space-x-1">
          <button onClick={() => moveTask(task.id, "todo")} className="text-xs">ToDo</button>
          <button onClick={() => moveTask(task.id, "inprogress")} className="text-xs">Progress</button>
          <button onClick={() => moveTask(task.id, "done")} className="text-xs">Done</button>
        </div>
      </div>
    </div>
  );
}