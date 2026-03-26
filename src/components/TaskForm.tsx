import React from "react";
import { useState, useContext } from "react";
import { BoardContext } from "../context/BoardContext";

export default function TaskForm() {
  const { addTask } = useContext(BoardContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return;
    addTask({
      id: Date.now().toString(),
      title,
      description: desc,
      status: "todo",
    });
    setTitle("");
    setDesc("");
  };

  return (
    <div className="mb-4">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title"
        className="border p-2 mr-2"/>
      <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description"
        className="border p-2 mr-2"/>
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-3 py-2">
        Add
      </button>
    </div>
  );
}