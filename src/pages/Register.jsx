import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "../styles/pages/Register.css";
import { Layout } from "../components/Layout";

export const Register = () => {
  const { register } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await register(
      formData.username,
      formData.password,
      formData.email
    );

    if (success) {
      setMessage("✅ Registro exitoso.");

      setFormData({ username: "", email: "", password: "" });

      setTimeout(() => {
        setMessage("");
        navigate("/");
      }, 1500);
    } else {
      setMessage("❌ Error en el registro.");
    }
  };

  return (
    <Layout>
      <div className="register-container">
        <h1>Registrarse</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label>Usuario:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <button type="submit">Registrarse</button>
        </form>
        {message && <p className="register-message">{message}</p>}
      </div>
    </Layout>
  );
};