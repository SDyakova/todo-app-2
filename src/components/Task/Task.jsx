import React from 'react';
import classes from './Task.module.scss';

const Task = () => {
  return (
    <label className={classes.input}>
      <div className={classes.checbox_wrapper}>
        <input className={classes.checkbox} type="checkbox"></input>
        <span className={classes.task}>Active task</span>
      </div>
      <div>
        <span className={classes.timer}>created 17 seconds ago</span>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </label>
  );
};

export default Task;
