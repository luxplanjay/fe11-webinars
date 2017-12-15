import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon }) => (
  <svg>
    <use href={`${icon}`} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default Icon;
