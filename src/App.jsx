/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './route'
import './App.css'
// import { AuthProvider } from './context/AuthContext'

function App() {
  const [status, setStatus] = useState(false)
  return (
    // <AuthProvider>
      <Routes>
        {
          status
            ? <Route path="/*" element={<PrivateRoutes />} />
            : <Route path="/*" element={<PublicRoutes />} />
        }
      </Routes>
    // </AuthProvider>
  )
}
export default App
