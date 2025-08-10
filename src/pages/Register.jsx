import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const Register = () => {
  const { register } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await register(formData.username, formData.password, formData.email);
    if (success) {
      setMessage("Registro exitoso.");
      navigate("/");
    } else {
      setMessage("Error en el registro.");
    }
  };

  return (
    <div>
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>Usuario:</label>
        <input type="text" name="username" onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />
        <label>Contraseña:</label>
        <input type="password" name="password" onChange={handleChange} required />
        <button type="submit">Registrarse</button>
      </form>
      <p>{message}</p>
    </div>
  );
};
