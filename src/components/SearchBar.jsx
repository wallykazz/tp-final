import { useState } from 'react';

const mockProducts = [
  { id: 1, nombre: "" },
  { id: 2, nombre: "" },
  { id: 3, nombre: "" },
  { id: 4, nombre: "" },
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState(mockProducts);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const results = mockProducts.filter((product) =>
      product.name.toLowerCase().includes(value)
    );

    setFilteredResults(results);
  };

  return (
    <div>
      <h1>Buscar Productos</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <ul>
        {filteredResults.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
        {filteredResults.length === 0 && <p>No se encontraron productos.</p>}
      </ul>
    </div>
  );
};

export { SearchBar }