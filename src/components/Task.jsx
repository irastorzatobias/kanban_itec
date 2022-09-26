import React from 'react';
import taskService from 'services/task';

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
  const deleteTask = () => {
    taskService.eraseTask(id);
    endDelete();
  };

  const editTask = () => {};

  const setPriorityColor = () => {
    switch (priority) {
      case 'Baja':
        return 'bg-blue-400';
      case 'Media':
        return 'bg-yellow-400';
      case 'Urgente':
        return 'bg-red-400';
      default:
        return 'bg-green-400';
    }
  };

  const setBorderColor = () => {
    switch (type) {
      case 'toDo':
        return 'border-blue-500';
      case 'inProgress':
        return 'border-yellow-500';
      case 'underReview':
        return 'border-red-500';
      case 'done':
        return 'border-green-500';
      default:
        return '';
    }
  };

  return (
    <div className={`p-2 bg-white border-solid border-l-4 ${setBorderColor()}`}>
      <div className="flex justify-between mb-1">
        <h1 className="text-sm text-left">{description}</h1>
        <p className="text-xs border-solid border-b-2 border-red-500 mb-1">{name}</p>
      </div>
      <div className="flex justify-between items-center border-b-2 pb-2">
        <div className="flex items-center justify-center gap-2">
          <p
            className={`${setPriorityColor()} text-xs p-1 rounded-full text-neutral-50 w-16 text-center tracking-tight`}
          >
            {priority}
          </p>
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
