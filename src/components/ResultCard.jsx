// components/ResultCard.jsx
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.p`
  font-size: 16px;
  color: #333;
`;

const MoreInfoButton = styled.button`
  padding: 5px 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;

const ResultCard = ({ pet, onMoreInfo }) => {
    return (
        <Card>
            <Info>Type: {pet.type}</Info>
            <Info>Breed: {pet.breed}</Info>
            <Info>Color: {pet.color}</Info>
            <Info>Location: {pet.location}</Info>
            <MoreInfoButton onClick={() => onMoreInfo(pet)}>More Info</MoreInfoButton>
        </Card>
    );
};

export default ResultCard;
