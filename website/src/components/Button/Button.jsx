import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Button.module.scss';

const Button = ({ children, type, color }) => (
  <button type={type || 'button'} className={styles.nirvanaBtn + ' ' + color}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.any,
  color: PropTypes.any,
};

export { Button };
