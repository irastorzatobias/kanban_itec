import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import { helpFetch } from "./helpers/helpFetch";

function App() {
  const [tasks, setTasks] = useState({
    to_do: [],
    in_progress: [],
    under_review: [],
    done: [],
  });

  const API = helpFetch();

  const setupTasks = (tasksResponse) => {
  }

  useEffect(() => {
    (async () => {
      const data = await API.get("tasks");
      setupTasks(data.state);
    })();
  }, []);

  // const addTask = (nameOfTask) => {
  //   const task = {
  //     name: "Tarea agregada por POST",
  //     description: "Agregada",
  //     points: 29,
  //     priority: "",
  //     state: "done",
  //   };

  //   const options = {
  //     body: task,
  //   };

  //   API.post("tasks", options);
  //   setTasks([...tasks, task]);
  // };

  const editTask = () => {
    return;
  };

  const deleteTask = () => {};

  return (
    <div className="App w-[100vw] h-[100vh]">
      <Header title="kanban board" />
      <CardContainer>
        <Card tasks={tasks["to_do"]}/>
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </div>
  );
}

export default App;
