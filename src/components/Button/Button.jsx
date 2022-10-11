import React from 'react';
import classes from './Button.module.scss';

const Button = ({ type, title, onDeleted, handleEditButtonClick, onFilter }) => {
  return (
    <button
      className={`${classes.btn} ${classes[type] ? classes[type] : ''}`}
      onClick={type === 'delete' ? onDeleted : type === 'edit' ? handleEditButtonClick : onFilter}
    >
      {title}
    </button>
  );
};

export default Button;
