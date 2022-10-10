import React from 'react';
import classes from './Button.module.scss';

const Button = ({ type, title, onDeleted, handleEditButtonClick }) => {
  return (
    <button
      className={`${classes.btn} ${classes[type] ? classes[type] : ''}`}
      onClick={type === 'delete' ? onDeleted : type === 'edit' ? handleEditButtonClick : null}
    >
      {title}
    </button>
  );
};

export default Button;
