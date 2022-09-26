import React, { useState } from "react";
import { helpFetch } from "../helpers/helpFetch";

export default function Task({
  id,
  description,
  name,
  points,
  priority,
  type,
  endDelete,
  endEdit,
}) {
  const API = helpFetch();

  const deleteTask = () => {
    API.erase("tasks", id);
    endDelete();
  };

  const editTask = () => {};

  const setPriorityStyle = () => {
    switch (priority) {
      case "Baja":
        return "bg-blue-300 text-xs p-1 rounded-full";
      case "Media":
        return "bg-yellow-300 text-xs p-1 rounded-full";
      case "Urgente":
        return "bg-red-300 text-xs p-1 rounded-full";
      default:
        return "bg-green-300 text-xs p-1 rounded-full";
    }
  };

  const setTypeStyle = () => {
    switch (type) {
      case "toDo":
        return "p-2 bg-white border-solid border-l-4 border-blue-500";
      case "inProgress":
        return "p-2 bg-white border-solid border-l-4 border-yellow-500";
      case "underReview":
        return "p-2 bg-white border-solid border-l-4 border-red-500";
      case "done":
        return "p-2 bg-white border-solid border-l-4 border-green-500";
      default:
        return "";
    }
  };

  return (
    <div className={setTypeStyle()}>
      <div className="flex justify-between mb-">
        <h1 className="text-sm text-left">{description}</h1>
        <p className="text-xs border-solid border-b-2 border-red-500 mb-1">
          {name}
        </p>
      </div>
      <div className="flex justify-between items-center border-b-2">
        <div className="flex items-center justify-center gap-2">
          <p className={setPriorityStyle()}>{priority}</p>
          <p className="text-xs bg-gray-100 p-1 rounded-full">{points}</p>
        </div>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            className="cursor-pointer"
            onClick={deleteTask}
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            className="cursor-pointer"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M7.243 18H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
