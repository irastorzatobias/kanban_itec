import React, { useEffect, useState } from "react";
import Task from "./Task";
import { helpFetch } from "../helpers/helpFetch";

export default function Card({ type }) {
  const [tasks, setTasks] = useState([]);

  const API = helpFetch();

  useEffect(() => {
    (async () => {
      const data = await API.get('tasks');
      setTasks(data);
    })();
  }, []);

  const addTask = () => {};

  const editTask = () => {};

  const deleteTask = () => {};

  const listTasks = () => {
    return tasks
      .filter((task) => task.state.toLowerCase() === type.toLowerCase())
      .map((task) => (
        <Task
          key={task.id}
          description={task.description}
          name={task.name}
          points={task.points}
          priority={task.priority}
        />
      ));
  };

  return (
    <div
      className="w-[50vw] border-double border-4
     border-gray-600 bg-gray-100 rounded-lg grow-[2] p-1"
    >
      <div>
        <h1 className="text-left p-2 border-solid border-b-2 mb-1 text-xs text-gray-500">
          {type}
        </h1>
        {listTasks()}
      </div>
      +
    </div>
  );
}
