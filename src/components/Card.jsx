import React from "react";
import Task from "./Task";

export default function Card({ type, tasks }) {
  return (
    <div
      className="w-[50vw] border-double border-4
     border-gray-600 bg-gray-100 rounded-lg grow-[2] p-1"
    >
      <div>
        <h1 className="text-left p-2 border-solid border-b-2 mb-1 text-xs text-gray-500">
          {type}
        </h1>
        {type === "TO DO" && (
          <Task
            description="Tarea para hacer numero 1"
            name="ITDR-333"
            points={3}
            priority="Baja"
          />
        )}
        {type === "TO DO" && (
          <Task
            description="Tarea para hacer numero 1"
            name="ITDR-333"
            points={3}
            priority="Baja"
          />
        )}
        {type === "IN PROGRESS" && (
          <Task
            description="Tarea para hacer numero 2"
            name="ITDR-333"
            points={3}
            priority="Media"
          />
        )}
        {type === "UNDER REVIEW" && (
          <Task
            description="Tarea para hacer numero 3"
            name="ITDR-333"
            points={3}
            priority="Urgente"
          />
        )}
        {type === "DONE" && (
          <Task
            description="Tarea para hacer numero 2"
            name="ITDR-333"
            points={3}
          />
        )}
      </div>
      +
    </div>
  );
}
