import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import ResultCard from './components/ResultCard';
import DetailModal from './components/DetailModal';
import Footer from './components/Footer';

function App() {
    // Estado para controlar la visibilidad del modal de detalles
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Estado para almacenar la mascota seleccionada para más detalles
    const [selectedPet, setSelectedPet] = useState(null);
    // Estado para almacenar todas las mascotas; inicializa desde Local Storage si está disponible
    const [pets, setPets] = useState(() => JSON.parse(localStorage.getItem('pets')) || []);

    // Efecto para actualizar Local Storage cada vez que la lista de mascotas cambia
    useEffect(() => {
        localStorage.setItem('pets', JSON.stringify(pets));
    }, [pets]);

    // Función para añadir una nueva mascota al estado y al Local Storage
    const handleAddPet = (pet) => {
        setPets([...pets, { ...pet, id: pets.length + 1 }]);
    };

    // Función para manejar la apertura del modal de detalles
    const handleOpenModal = (pet) => {
        setSelectedPet(pet);
        setIsModalOpen(true);
    };

    // Función para cerrar el modal de detalles
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <NavBar />
            <SearchForm onAddPet={handleAddPet} />
            {pets.map(pet => (
                <ResultCard key={pet.id} pet={pet} onMoreInfo={handleOpenModal} />
            ))}
            {isModalOpen && <DetailModal pet={selectedPet} onClose={handleCloseModal} />}
            <Footer />
        </div>
    );
}

export default App;
