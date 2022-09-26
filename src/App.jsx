import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import CardContainer from './components/CardContainer';
import Header from './components/Header';
import taskService from 'services/task';

function App() {
  const [tasks, setTasks] = useState({
    toDo: [],
    inProgress: [],
    underReview: [],
    done: [],
  });

  const [isAdding, setIsAdding] = useState(false);
  const [doneAdding, setDoneAdding] = useState(false);
  const [doneDelete, setDoneDelete] = useState(false);
  const [doneEdit, setDoneEdit] = useState(false);

  const endAdd = () => {
    setDoneAdding(!doneAdding);
  };

  const endDelete = () => {
    setDoneDelete(!doneDelete);
  };

  const endEdit = () => {
    setDoneEdit(!doneEdit);
  };

  const toggleAdd = () => {
    const newIsAdding = !isAdding;
    setIsAdding(newIsAdding);
  };

  const setupTasks = (tasksArray) => {
    setTasks({
      toDo: [],
      inProgress: [],
      underReview: [],
      done: [],
    });
    tasksArray.forEach((task) => {
      switch (task.state) {
        case 'toDo':
          setTasks((prevState) => ({
            ...prevState,
            toDo: [...prevState.toDo, task],
          }));
          break;
        case 'inProgress':
          setTasks((prevState) => ({
            ...prevState,
            inProgress: [...prevState.inProgress, task],
          }));
          break;
        case 'underReview':
          setTasks((prevState) => ({
            ...prevState,
            underReview: [...prevState.underReview, task],
          }));
          break;
        case 'done':
          setTasks((prevState) => ({
            ...prevState,
            done: [...prevState.done, task],
          }));
          break;
        default:
          break;
      }
    });
  };

  useEffect(() => {
    (async () => {
      const data = await taskService.getTasks();

      setupTasks(data);
    })();
  }, [doneAdding, doneDelete]);

  return (
    <div className="w-screen h-screen bg-slate-100">
      <Header title="kanban board" />
      <CardContainer>
        <Card
          tasks={tasks['toDo']}
          toggleAdd={toggleAdd}
          isAdding={isAdding}
          type="toDo"
          endAdd={endAdd}
          endDelete={endDelete}
          endEdit={endEdit}
        />
        <Card
          tasks={tasks['inProgress']}
          toggleAdd={toggleAdd}
          isAdding={isAdding}
          type="inProgress"
          endAdd={endAdd}
          endDelete={endDelete}
          endEdit={endEdit}
        />
        <Card
          tasks={tasks['underReview']}
          toggleAdd={toggleAdd}
          isAdding={isAdding}
          type="underReview"
          endAdd={endAdd}
          endDelete={endDelete}
          endEdit={endEdit}
        />
        <Card
          tasks={tasks['done']}
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
