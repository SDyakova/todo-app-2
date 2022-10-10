import React from 'react';
import Button from '../Button';
import classes from './TaskFilter.module.scss';

const TaskFilter = () => {
  const filterBtns = ['All', 'Active', 'Completed'];

  const filterList = filterBtns.map((btn) => <Button title={btn} />);

  return <div>{filterList}</div>;
};

export default TaskFilter;
