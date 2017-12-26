import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  outline: 0;
  border: 0;
  border-radius: 2px;
  color: #fff;
  width: 40px;
  height: 40px;
  font-size: 24px;
  cursor: pointer;
  background-color: #009688;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #00796B;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.3);
  }
`;

const Button = ({ type, text, onClick }) => (
  <StyledButton type={type} onClick={onClick}>
    {text}
  </StyledButton>
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  role: PropTypes.string,
  cls: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'button',
  cls: '',
  role: 'default',
  onClick: () => {}
};

export default Button;
