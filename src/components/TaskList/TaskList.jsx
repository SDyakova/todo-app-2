import React from 'react';
import Task from '../Task';
import classes from './TaskList.module.scss';

const TaskList = ({ taskItems }) => {
  const list = taskItems.map(({ id, title, date }) => {
    return <Task key={id} title={title} date={date} />;
  });

  return <ul className={classes.list}>{list}</ul>;
};

export default TaskList;
