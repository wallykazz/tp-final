import { useState, useEffect } from 'react';
import '../styles/components/SearchBar.css';

const SearchBar = ({ productos, handleOpenEdit, handleDelete, user }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState(productos || []);

  useEffect(() => {
    setFilteredResults(productos);
  }, [productos]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const results = productos.filter((producto) =>
      producto.title?.toLowerCase().includes(value)
    );

    setFilteredResults(results);
  };

  return (
    <div className="searchbar-container">
      <h1 className="searchbar-title">Buscar Productos</h1>
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={handleSearch}
        className="searchbar-input"
      />

      <div className="product-grid">
        {filteredResults.length > 0 ? (
          filteredResults.map((producto) => (
            <div key={producto.id} className="product-card">
              <img
                src={producto.image}
                alt={producto.title}
                className="product-image"
              />
              <h3 className="product-title">{producto.title}</h3>
              <p className="product-description">{producto.description}</p>
              <p className="product-price">${producto.price}</p>
              <p><strong>{producto.category}</strong></p>

              {user && (
                <div className="product-actions">
                  <button onClick={() => handleOpenEdit(producto)}>Actualizar</button>
                  <button onClick={() => handleDelete(producto.id)}>Borrar</button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-results">No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
};

export { SearchBar };