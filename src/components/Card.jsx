import React, { useEffect, useState } from "react";
import Task from "./Task";
import { helpFetch } from "../helpers/helpFetch";

export default function Card({ tasks }) {
  return (
    <div
      className="w-[50vw] border-double border-4 min-h-[50vh]
     border-gray-600 bg-gray-100 rounded-lg grow-[2] p-1"
    >
      <div>
        <h1 className="text-left p-2 border-solid border-b-2 mb-1 text-xs text-gray-500">
          Testing
        </h1>
      </div>
      +
    </div>
  );
}
