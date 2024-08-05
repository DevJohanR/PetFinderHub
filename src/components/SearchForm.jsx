// components/SearchForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

const SearchForm = ({ onAddPet }) => {
    const [formData, setFormData] = useState({
        type: '',
        breed: '',
        color: '',
        location: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddPet(formData);
        setFormData({ type: '', breed: '', color: '', location: '' }); // Reset form
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input name="type" value={formData.type} onChange={handleChange} placeholder="Type of animal" />
            <Input name="breed" value={formData.breed} onChange={handleChange} placeholder="Breed" />
            <Input name="color" value={formData.color} onChange={handleChange} placeholder="Color" />
            <Input name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
            <Button type="submit">Report Pet</Button>
        </Form>
    );
};

export default SearchForm;
