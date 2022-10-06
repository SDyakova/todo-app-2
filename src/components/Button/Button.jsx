import React from 'react';
import classes from './Button.module.scss';

const Button = ({ type, onDeleted }) => {
  const btns = { edit: 'Edit', delete: 'X' };

  return (
    <button className={`${classes.btn} ${classes[type]}`} onClick={onDeleted}>
      {btns[type]}
    </button>
  );
};

export default Button;
