// components/DetailModal.jsx
import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 500px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

const Detail = styled.p`
  margin-top: 20px;
  font-size: 16px;
`;

const DetailModal = ({ pet, onClose }) => {
    return (
        <Modal>
            <CloseButton onClick={onClose}>Close</CloseButton>
            <h2>Detalle de la Mascota</h2>
            {pet ? (
                <>
                    <Detail>Type: {pet.type}</Detail>
                    <Detail>Breed: {pet.breed}</Detail>
                    <Detail>Color: {pet.color}</Detail>
                    <Detail>Location: {pet.location}</Detail>
                    <Detail>Aquí irían los datos traídos de la API.</Detail>
                </>
            ) : (
                <Detail>No hay detalles disponibles para mostrar.</Detail>
            )}
        </Modal>
    );
};

export default DetailModal;
