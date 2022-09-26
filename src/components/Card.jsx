import React, { useEffect, useState } from "react";
import { helpFetch } from "../helpers/helpFetch";
import Task from "./Task";

export default function Card({ tasks, type, toggleAdd, endAdd, endDelete, endEdit }) {
  const API = helpFetch();

  const [adding, setAdding] = useState(false);
  const [taskText, onChangeText] = useState("");

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const camelCaseToWord = (word) => {
    return word.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  };

  const priorities = ["Baja", "Media", "Urgente"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.length > 0) {
      const taskName = "ITDR-" + randomInt(1, 100);
      const task = {
        name: taskName,
        description: taskText,
        points: randomInt(0, 100),
        priority: priorities[randomInt(0, 2)],
        state: type,
      };

      const options = {
        body: task,
      };

      API.post("tasks", options);
      endAdd(true);
      onChangeText("");
      handleAdd();
    }
  };

  const handleChange = (e) => {
    onChangeText(e.target.value);
  };

  const handleAdd = () => {
    toggleAdd();
    setAdding(!adding);
  };

  const addingHtml = adding ? (
    <form
      className="border-b-1 border-solid border-gray-200 mt-2 space-x-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="mr-1 p-1 text-sm"
        placeholder="Add task"
        onChange={handleChange}
        value={taskText}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 
      text-white font-bold px-4 rounded text-sm "
        type="submit"
      >
        Add
      </button>
      <button
        className="text-sm text-red-500"
        onClick={handleAdd}
        type="button"
      >
        x
      </button>
    </form>
  ) : (
    <button onClick={handleAdd} className="text-green-500 font-bold">
      +
    </button>
  );

  return (
    <div
      className="w-[50vw] border-double border-4 min-h-[50vh]
     border-gray-600 bg-gray-100 rounded-lg grow-[2] p-1"
    >
      <div>
        <h1 className="text-left p-2 border-solid border-b-2 mb-1 text-xs text-gray-500 uppercase">
          {camelCaseToWord(type)}
        </h1>
      </div>
      {tasks.map((task) => (
        <Task
          id={task.id}
          task={task}
          key={task.id}
          description={task.description}
          name={task.name}
          points={task.points}
          priority={task.priority}
          type={task.state}
          endDelete={endDelete}
          endEdit={endEdit}
        />
      ))}
      {addingHtml}
    </div>
  );
}
