import { Route } from 'react-router'
import './App.css'
import { Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
    </Routes>
  )
}

export default App
