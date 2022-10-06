import React from 'react';
import Task from '../Task';
import classes from './TaskList.module.scss';

const TaskList = ({ taskItems, onDeleted }) => {
  const list = taskItems.map(({ id, title, date }) => {
    return <Task key={id} title={title} id={id} onDeleted={onDeleted} />;
  });

  return <ul className={classes.list}>{list}</ul>;
};

export default TaskList;
