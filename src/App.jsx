import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import {PrivateRoutes, PublicRoutes} from './route'
import './App.css'

function App() {
  const [status, setStatus] = useState(false)


  return (
    <Routes>
    {
      status
           ? <Route path="/*" element={<PrivateRoutes />} />
           : <Route path="/*" element={<PublicRoutes />} />
    }

    </Routes>
  )
}

export default App
