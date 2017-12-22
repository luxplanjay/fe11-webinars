import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  color: red;
`;

const UserName = styled.h1`
  text-transform: uppercase;
  display: flex;
`;

const UserInfo = styled.p`
  font-size: 24px;
  color: ${props => props.color};
`;

const UserCard = ({ name, age, position }) => {
  return (
    <Card>
      <UserName>Name: {name}</UserName>
      <UserInfo color="green">Age: {age}</UserInfo>
      <UserInfo color="blue">Position: {position}</UserInfo>
    </Card>
  );
};

export default UserCard;
