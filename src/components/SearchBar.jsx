import { useState } from 'react';

const mockProducts = [
  { id: 1, nombre: "F" },
  { id: 2, nombre: "Mens Cotton Jacket" },
  { id: 3, nombre: "Mens Casual Slim Fit" },
  { id: 4, nombre: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet" },
  { id: 5, nombre: "Solid Gold Petite Micropave" },
  { id: 6, nombre: "White Gold Plated Princess" },
  { id: 7, nombre: "Pierced Owl Rose Gold Plated Stainless Steel Double" },
  { id: 8, nombre: "WD 2TB Elements Portable External Hard Drive - USB 3.0" },


];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState(mockProducts);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const results = mockProducts.filter((product) =>
      product.title?.toLowerCase().includes(value)
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