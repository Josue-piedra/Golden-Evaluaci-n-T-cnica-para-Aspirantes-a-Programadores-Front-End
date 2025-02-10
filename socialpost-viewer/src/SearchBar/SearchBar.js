import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        onSearch(value); // Notificar al componente padre sobre el cambio en el filtro
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar publicaciones..."
                value={searchTerm}
                onChange={handleSearch}
                style={{ padding: "10px", width: "20%", marginBottom: "20px" }}
            />
        </div>
    );
};

export default SearchBar;
