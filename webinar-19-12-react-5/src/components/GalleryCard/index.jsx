import React from 'react';
import PropTypes from 'prop-types';

const GalleryCard = ({ img, author }) => (
  <div>
    <img src={img} alt="" />
    <h1>{author}</h1>
  </div>
);

export default GalleryCard;
