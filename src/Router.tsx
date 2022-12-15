import { Login } from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  )
}
