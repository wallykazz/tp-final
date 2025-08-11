
import { useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import "../styles/pages/Login.css"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()

  const nagivate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log({ username, password })
    const isLogin = await login(username, password)

    if (isLogin) {
      setUsername("")
      setPassword("")
      nagivate("/")
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
          <form onSubmit={handleLogin}>
            <div>
              <label>Nombre de usuario:</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div>
              <label>Contraseña:</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button type="submit">Ingresar</button>
          </form>
        </section>
      </div>
    </Layout>
  )
}

export { Login }