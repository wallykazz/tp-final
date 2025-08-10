import { useState, useEffect } from 'react';

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

      <ul>
        {filteredResults.length > 0 ? (
          filteredResults.map((producto) => (
            <li key={producto.id}>
              <img
                src={producto.image}
                alt={producto.title}
              />
              <span>{producto.title}</span>
            </li>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </ul>
    </div>
  );
};

export { SearchBar }