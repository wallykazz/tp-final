
import { useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import "../styles/pages/Login.css"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [loginError, setLoginError] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const validate = () => {
    const newErrors = {}
    if (!username.trim()) newErrors.username = "El nombre de usuario es requerido"
    if (!password.trim()) newErrors.password = "La contraseña es requerida"
    return newErrors
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setLoginError("")

    const isLogin = await login(username, password)

    if (isLogin) {
      setUsername("")
      setPassword("")
      navigate("/")
    } else {
      setLoginError("Usuario o contraseña incorrectos")
    }
  }

  return (
    <Layout>
      <div className="login-container">
        <h1>Inicia sesión</h1>

        <section>
          <h2>Hola, bienvenido de nuevo.</h2>
          <p>Usuario: johnd</p>
          <p>Contraseña: m38rmF$</p>

          <form onSubmit={handleLogin} noValidate>
            <div>
              <label>Nombre de usuario:</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              {errors.username && <p className="error-message">{errors.username}</p>}
            </div>

            <div>
              <label>Contraseña:</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>

            {loginError && <p className="error-message">{loginError}</p>}

            <button type="submit">Ingresar</button>
          </form>
        </section>
      </div>
    </Layout>
  )
}

export { Login }