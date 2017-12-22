import React from 'react';

const UserCard = ({ name, age, position }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Position: {position}</h3>
    </div>
  );
};

export default UserCard;
