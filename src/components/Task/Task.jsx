import React, { useState } from 'react';
import Button from '../Button/Button';
import classes from './Task.module.scss';

const Task = ({ id, title, onDeleted, onEditingTask }) => {
  const initialState = {
    isEditing: false,
    inputValue: title,
  };
  const [taskState, setTaskState] = useState(initialState);

  const { isEditing } = taskState;

  const handleEditButtonClick = () => {
    setTaskState((taskState) => ({ ...taskState, isEditing: true }));
  };

  const handleInputChange = (e) => {
    setTaskState((taskState) => ({
      ...taskState,
      inputValue: e.target.value,
    }));
  };

  const handleKeyUp = (e) => {
    if (isEditing && e.key === 'Enter') {
      console.log(e.target.value);
      onEditingTask(e.target.value, id);
      setTaskState((taskState) => ({
        ...taskState,
        isEditing: false,
      }));
    }

    if (e.key === 'Escape') {
      setTaskState((taskState) => ({
        ...taskState,
        isEditing: false,
      }));
    }
  };

  const editingField = (
    <input
      type="text"
      className={classes.edit}
      value={taskState.inputValue}
      onChange={(e) => handleInputChange(e)}
      onKeyUp={(e) => handleKeyUp(e)}
    ></input>
  );

  return !isEditing ? (
    <li>
      <label className={classes.input}>
        <div className={classes.checkbox_wrapper}>
          <input className={classes.checkbox} type="checkbox"></input>
          <span className={classes.title}>{title}</span>
        </div>
        <div>
          <Button type="edit" handleEditButtonClick={handleEditButtonClick} />
          <Button type="delete" onDeleted={() => onDeleted(id)} onEditingTask={() => onEditingTask(id, title)} />
        </div>
      </label>
    </li>
  ) : (
    editingField
  );
};

export default Task;
