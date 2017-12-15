import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import './styles.css';

const Todo = ({ text, onClick }, context) => (
  <div className="Todo">
    <p
      className="Todo__text"
      style={{
        background: context.color
      }}
    >
      {text}
    </p>
    <Button cls="Todo__btn" text="-" onClick={onClick} />
  </div>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Todo.contextTypes = {
  color: PropTypes.string
};

export default Todo;
