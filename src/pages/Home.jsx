import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/UserContext";
import { SearchBar } from "../components/SearchBar";
import "../styles/pages/Home.css"

const Home = () => {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);
  const [titleEdit, setTitleEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");
  const [categoryEdit, setCategoryEdit] = useState("");
  const [imageEdit, setImageEdit] = useState("");

  const { user } = useAuth();

  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", { method: "GET" });
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchingProducts();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" });

    if (response.ok) {
      setProducts((prevProduct) => prevProduct.filter((product) => product.id !== id));
    }
  };

  const handleOpenEdit = (product) => {
    setShowPopup(true);
    setProductToEdit(product);
    setTitleEdit(product.title);
    setPriceEdit(product.price);
    setDescriptionEdit(product.description);
    setCategoryEdit(product.category);
    setImageEdit(product.image);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      id: productToEdit.id,
      title: titleEdit,
      price: Number(priceEdit),
      description: descriptionEdit,
      category: categoryEdit,
      image: imageEdit,
    };

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productToEdit.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (response.ok) {
        const data = await response.json();
        setProducts((prevProduct) =>
          prevProduct.map((product) =>
            product.id === productToEdit.id ? data : product
          )
        );
      }
      setShowPopup(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <section className="about-section welcome-section">
        <h1>Bienvenido a Nuestra Tienda</h1>
        <p>Descubrí una selección exclusiva de productos para vos. Calidad, confianza y atención personalizada.</p>
      </section>

      <section className="searchbar-container">
        <h1 className="searchbar-title">Nuestros productos</h1>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          Elegí entre nuestras categorías más populares.

        </p>

        <SearchBar
          productos={products}
          handleOpenEdit={handleOpenEdit}
          handleDelete={handleDelete}
          user={user}
        />

        {showPopup && (
          <section className="popup-edit">
            <h2 className="searchbar-title">Editando producto</h2>
            <button className="close-popup-btn" onClick={() => setShowPopup(null)}>
              Cerrar
            </button>
            <form onSubmit={handleUpdate} className="edit-form">
              <input
                type="text"
                placeholder="Ingrese el título"
                value={titleEdit}
                onChange={(e) => setTitleEdit(e.target.value)}
              />
              <input
                type="number"
                placeholder="Ingrese el precio"
                value={priceEdit}
                onChange={(e) => setPriceEdit(e.target.value)}
              />
              <textarea
                placeholder="Ingrese la descripción"
                value={descriptionEdit}
                onChange={(e) => setDescriptionEdit(e.target.value)}
              ></textarea>
              <input
                type="text"
                placeholder="Ingrese la categoría"
                value={categoryEdit}
                onChange={(e) => setCategoryEdit(e.target.value)}
              />
              <input
                type="text"
                placeholder="Ingrese la URL de la imagen"
                value={imageEdit}
                onChange={(e) => setImageEdit(e.target.value)}
              />
              <button type="submit" className="update-btn">
                Actualizar
              </button>
            </form>
          </section>
        )}
      </section>

      <section className="about-section why-choose-us">
        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li>
            <h3>Envíos a todo el país</h3>
            <p>Recibí tu compra en la puerta de tu casa estés donde estés.</p>
          </li>
          <li>
            <h3>Pagos seguros</h3>
            <p>Trabajamos con plataformas que garantizan tu seguridad.</p>
          </li>
          <li>
            <h3>Atención personalizada</h3>
            <p>Estamos disponibles para ayudarte en todo momento.</p>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export { Home };