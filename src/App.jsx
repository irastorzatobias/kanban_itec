import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import { helpFetch } from "./helpers/helpFetch";

function App() {
  const API = helpFetch();

  const [tasks, setTasks] = useState({
    toDo: [],
    inProgress: [],
    underReview: [],
    done: [],
  });
  const [doneAdding, setDoneAdding] = useState(false);
  const [doneDelete, setDoneDelete] = useState(false);
  const [doneEdit, setDoneEdit] = useState(false);

  const endAdd = () => {
    setDoneAdding(!doneAdding);
  };

  const endDelete = () => {
    setDoneDelete(!doneDelete);
  }

  const endEdit = () => {
    setDoneEdit(!doneEdit);
  }

  const setupTasks = (tasksArray) => {
    setTasks({
      toDo: [],
      inProgress: [],
      underReview: [],
      done: [],
    });
    tasksArray.forEach(task => {
      switch(task.state){
        case "toDo":
          setTasks(prevState => ({
            ...prevState,
            toDo: [...prevState.toDo, task]
          }))
          break;
        case "inProgress":
          setTasks(prevState => ({
            ...prevState,
            inProgress: [...prevState.inProgress, task]
          }))
          break;
        case "underReview":
          setTasks(prevState => ({
            ...prevState,
            underReview: [...prevState.underReview, task]
          }))
          break;
        case "done":
          setTasks(prevState => ({
            ...prevState,
            done: [...prevState.done, task]
          }))
          break;
        default:
          break;
      }
    })
  };
  const [isAdding, setIsAdding] = useState(false);

  const toggleAdd = () => {
    const newIsAdding = !isAdding;
    setIsAdding(newIsAdding);
  };

  useEffect(() => {
    (async () => {
      const data = await API.get("tasks");
      setupTasks(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await API.get("tasks");
      setupTasks(data);
    })();
  }, [doneAdding, doneDelete]);

  return (
    <div className="App w-[100vw] h-[100vh]">
      <Header title="kanban board" />
      <CardContainer>
        <Card
          tasks={tasks["toDo"]}
          toggleAdd={toggleAdd}
          isAdding={isAdding}
          type="toDo"
          endAdd={endAdd}
          endDelete={endDelete}
          endEdit={endEdit}
        />
        <Card
          tasks={tasks["inProgress"]}
          toggleAdd={toggleAdd}
          isAdding={isAdding}
          type="inProgress"
          endAdd={endAdd}
          endDelete={endDelete}
          endEdit={endEdit}
        />
        <Card
          tasks={tasks["underReview"]}
          toggleAdd={toggleAdd}
          isAdding={isAdding}
          type="underReview"
          endAdd={endAdd}
          endDelete={endDelete}
          endEdit={endEdit}
        />
        <Card
          tasks={tasks["done"]}
          toggleAdd={toggleAdd}
          isAdding={isAdding}
          type="done"
          endAdd={endAdd}
          endDelete={endDelete}
          endEdit={endEdit}
        />
      </CardContainer>
    </div>
  );
}

export default App;
