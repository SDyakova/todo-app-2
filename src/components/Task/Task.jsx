import React from 'react';
import Button from '../Button/Button';
import classes from './Task.module.scss';

const Task = ({ title }) => {
  return (
    <label className={classes.input}>
      <div className={classes.checkbox_wrapper}>
        <input className={classes.checkbox} type="checkbox"></input>
        <span className={classes.title}>{title}</span>
      </div>
      <div>
        <Button type="edit" />
        <Button type="delete" />
      </div>
    </label>
  );
};

export default Task;
