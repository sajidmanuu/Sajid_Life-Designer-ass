import React from "react";
import { useContext } from "react";
import { BoardContext } from "../context/BoardContext";
import TaskCard from "./TaskCard";
import { ColumnType } from "../types";

export default function Column({ title, type }: { title: string; type: ColumnType }) {
  const { state } = useContext(BoardContext);
  const tasks = state.tasks.filter((t: any) => t.status === type);

  return (
    <div className="bg-gray-100 p-4 rounded w-full">
      <h2 className="font-bold mb-3">{title}</h2>
      {tasks.length === 0 && <p className="text-sm text-gray-500">No tasks</p>}
      {tasks.map((task: any) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}