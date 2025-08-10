import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Dashboard } from "../pages/Dashboard"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { NotFound } from "../pages/NotFound"
import { PrivateRoute } from "../components/PrivateRoute"
import { UserProvider } from "../context/UserContext"

const RouterApp = () => {
  return (
    <UserProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrate" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export { RouterApp }