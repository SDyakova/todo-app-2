import React from 'react';
import Button from '../Button';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <span>1 items left</span>
      <Button title="Clear completed" />
    </footer>
  );
};

export default Footer;
