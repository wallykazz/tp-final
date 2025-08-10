import { createContext, useContext, useState } from "react"

export const UserContext = createContext()

const UserProvider = (props) => {
  const [user, setUser] = useState(null)

  const login = async (username, password) => {
    // realizar una petición al backend 
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })

    if (response.ok) {
      const token = await response.json()
      setUser(true)
      return token
    } else {
      return false
    }
  }

  const register = async (username, password, email) => {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: 0,
          username,
          password,
          email
        })
      });

      if (!response.ok) throw new Error("Registro fallido");

      const data = await response.json();
      setUser(true); // simula inicio de sesion
      console.log("✅ Usuario registrado con éxito:", data);
      return true;
    } catch (error) {
      console.error("❌ Error en el registro:", error);
      return false;
    }
  };
  const logout = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ login, logout, user, register }}>
      {props.children}
    </UserContext.Provider>
  )
}

const useAuth = () => useContext(UserContext)

export { UserProvider, useAuth }
export const useUser = () => useContext(UserContext);