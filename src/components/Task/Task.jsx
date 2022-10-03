import React from 'react';
import classes from './Task.module.scss';

const Task = () => {
  return (
    <label className={classes.input}>
      <div className={classes.checkbox_wrapper}>
        <input className={classes.checkbox} type="checkbox"></input>
        <span className={classes.title}>Active task</span>
      </div>
      <div>
        <span className={classes.timer}>created 17 seconds ago</span>
        <button className={`${classes.btn} ${classes.edit}`}>Edit</button>
        <button>Delete</button>
      </div>
    </label>
  );
};

export default Task;
