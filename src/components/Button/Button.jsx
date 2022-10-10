import React from 'react';
import classes from './Button.module.scss';

const Button = ({ type, onDeleted, handleEditButtonClick }) => {
  const btns = { edit: 'Edit', delete: 'X' };

  return (
    <button
      className={`${classes.btn} ${classes[type]}`}
      onClick={type === 'delete' ? onDeleted : handleEditButtonClick}
    >
      {btns[type]}
    </button>
  );
};

export default Button;
