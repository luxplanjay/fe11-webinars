import React from 'react';
import { connect } from 'react-redux';
import v4 from 'uuid/v4';
import PropTypes from 'prop-types';
import Button from './Button';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 1px 1px 1px 1px rgba(31, 31, 31, 0.3);
`;

const Input = styled.input`
  outline: 0;
  border: 0;
  padding: 5px;
  margin-right: 10px;
  border-bottom: 2px solid #009688;
  font-size: 20px;
  color: #424242;
`;

const AddTodoForm = ({ onFormSubmit }) => {
  let inputRef = null;

  const handleSubmit = evt => {
    evt.preventDefault();

    if (inputRef.value !== '') {
      onFormSubmit(inputRef.value);

      inputRef.value = '';
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" innerRef={node => (inputRef = node)} />
      <Button type="submit" text="+" />
    </Form>
  );
};

AddTodoForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onFormSubmit(text) {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: v4(),
        text: text
      }
    });
  }
});

export default connect(null, mapDispatchToProps)(AddTodoForm);
