import React from 'react';
import TaskList from '../TaskList';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <h1 className={classes.title}>todos</h1>
      </header>
      <section className={classes.name}></section>

      <TaskList />
    </div>
  );
}

export default App;
