import React from "react";

export default function Task({ description, name, points, priority }) {
  const setPriority = () => {
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

  return (
    <div className="p-2 bg-white border-solid border-l-4 border-lime-500">
      <h1 className="text-sm text-left">{description}</h1>
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-2">
          {priority ? <p className={setPriority()}>{priority}</p> : <p className={setPriority()}>Finalizada</p> }
          <p className="text-xs bg-gray-100 p-1 rounded-full">{points}</p>
        </div>
        <p className="text-xs border-solid border-b-2 border-red-500">{name}</p>
      </div>
    </div>
  );
}
