import React from 'react';
import Button from '../Button/Button';
import { formatDistanceToNow, format } from 'date-fns';
import classes from './Task.module.scss';

const Task = ({ title, date }) => {
  let formatedDate = formatDistanceToNow(date, { includeSeconds: true });
  return (
    <label className={classes.input}>
      <div className={classes.checkbox_wrapper}>
        <input className={classes.checkbox} type="checkbox"></input>
        <span className={classes.title}>{title}</span>
      </div>
      <div>
        <span className={classes.timer}>`created {formatedDate} ago`</span>
        <Button type="edit" />
        <Button type="delete" />
      </div>
    </label>
  );
};

export default Task;
