import React from 'react';
import Button from '../Button/Button';
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
        <Button type="edit" />
        <Button type="delete" />
      </div>
    </label>
  );
};

export default Task;
