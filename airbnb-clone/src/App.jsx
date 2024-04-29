import { Route } from 'react-router'
import './App.css'
import { Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import IndexPage from './pages/IndexPage'
import Layout from './Layout'

function App() {
  return (
    <Routes>
      <Route path='/'  element={<Layout />} > 
        <Route index element={<IndexPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default App
