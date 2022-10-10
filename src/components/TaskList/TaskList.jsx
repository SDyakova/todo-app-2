import React from 'react';
import Task from '../Task';
import classes from './TaskList.module.scss';

const TaskList = ({ taskItems, onDeleted, onEditingTask }) => {
  const list = taskItems.map(({ id, title }) => {
    return <Task key={id} title={title} id={id} onDeleted={onDeleted} onEditingTask={onEditingTask} />;
  });

  return <ul className={classes.list}>{list}</ul>;
};

export default TaskList;
