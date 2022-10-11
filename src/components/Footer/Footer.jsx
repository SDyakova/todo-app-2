import React from 'react';
import Button from '../Button';
import TaskFilter from '../TaskFilter';
import classes from './Footer.module.scss';

const Footer = ({ onFilter }) => {
  return (
    <footer className={classes.footer}>
      <span>1 items left</span>
      <TaskFilter onFilter={onFilter} />
      <Button title="Clear completed" />
    </footer>
  );
};

export default Footer;
