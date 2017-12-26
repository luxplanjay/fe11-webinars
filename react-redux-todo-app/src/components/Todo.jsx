import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styled from 'styled-components';

const TodoCard = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 2px;
  box-shadow: 1px 1px 1px 1px rgba(31, 31, 31, 0.3);
  color: #424242;
`;

const TodoText = styled.p`
  flex-grow: 1;
  margin-right: 10px;
  line-height: 1.5;
`;

const Todo = ({ text, onClick, onAddToWatchList }) => (
  <TodoCard>
    <button onClick={onAddToWatchList}>add to WL</button>
    <TodoText>{text}</TodoText>
    <Button text="-" onClick={onClick} />
  </TodoCard>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Todo;
