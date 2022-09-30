import React from 'react';
import Task from '../Task';
import classes from './TaskList.module.scss';

const TaskList = () => {
  return (
    <div className={classes.wrapper}>
      <Task />
    </div>
  );
};

export default TaskList;
