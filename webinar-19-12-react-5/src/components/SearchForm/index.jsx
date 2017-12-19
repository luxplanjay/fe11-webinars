import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ getImages }) => {
  let input = null;

  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();

        getImages(input.value);
      }}
    >
      <input type="text" ref={node => (input = node)} />
      <button>search</button>
    </form>
  );
};

export default SearchForm;
