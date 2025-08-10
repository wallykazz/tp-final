import { useState, useEffect } from 'react';
import '../styles/components/SearchBar.css';

const SearchBar = () => {
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setFilteredResults(data);
      })
      .catch((error) => console.error('Error al cargar productos:', error));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const results = productos.filter((producto) =>
      producto.title?.toLowerCase().includes(value)
    );

    setFilteredResults(results);
  };

  return (
    <div>
      <h2>Buscar Productos</h2>
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ padding: '8px', width: '300px', marginBottom: '1rem' }}
      />

      <div className="product-grid">
        {filteredResults.length > 0 ? (
          filteredResults.map((producto) => (
            <div key={producto.id} className="product-card">
              <img src={producto.image} alt={producto.title} className="product-image" />
              <h3 className="product-title">{producto.title}</h3>
              <p className="product-description">{producto.description}</p>
              <p className="product-price">${producto.price}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
};

export { SearchBar }