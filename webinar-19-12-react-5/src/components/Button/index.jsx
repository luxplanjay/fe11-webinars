import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, text, onClick, cls }) => (
  <button type={type} onClick={onClick} className={cls}>
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  cls: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'button',
  cls: '',
  onClick: () => {}
};

export default Button;
