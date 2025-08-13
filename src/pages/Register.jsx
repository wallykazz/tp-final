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

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const { username, email, password } = formData;

    if (!username.trim()) newErrors.username = "El usuario es obligatorio.";
    else if (username.length < 3)
      newErrors.username = "El usuario debe tener al menos 3 caracteres.";

    if (!email.trim()) newErrors.email = "El email es obligatorio.";
    else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email))
      newErrors.email = "El email no tiene un formato válido.";

    if (!password) newErrors.password = "La contraseña es obligatoria.";
    else if (password.length < 6)
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const success = await register(formData.username, formData.password, formData.email);

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
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <div>
            <label>Usuario:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.username && <p className="error-message">{errors.username}</p>}
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>

          <button type="submit">Registrarse</button>
        </form>

        {message && <p className="register-message">{message}</p>}
      </div>
    </Layout>
  );
};