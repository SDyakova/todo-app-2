import React, { useState } from 'react';
import TaskList from '../TaskList';
import NewTaskForm from '../NewTaskForm';
import classes from './App.module.scss';

let maxId = 100;

function App() {
  const createTask = (text) => {
    return {
      id: maxId++,
      title: text,
      date: Date.now(),
    };
  };

  const initialState = [createTask('New Task1'), createTask('New Task2'), createTask('New Task3')];
  const [appState, setAppState] = useState(initialState);

  const addTask = (e) => {
    const newTask = createTask(e.target.value);
    if (e.key === 'Enter') {
      setAppState((appState) => {
        return [...appState, newTask];
      });
      e.target.value = '';
    }
  };

  const deleteTask = (id) => {
    setAppState((appState) => {
      const newArr = appState.filter((task) => task.id !== id);
      return [...newArr];
    });
  };

  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <h1 className={classes.title}>todos</h1>
      </header>
      <section className={classes.main}>
        <NewTaskForm addTask={addTask} />
        <TaskList taskItems={appState} onDeleted={deleteTask} />
      </section>
    </div>
  );
}

export default App;
