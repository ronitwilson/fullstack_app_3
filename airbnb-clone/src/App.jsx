import { Route } from 'react-router'
import './App.css'
import { Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import IndexPage from './pages/IndexPage'
import RegisterPage from './pages/RegisterPage'
import Layout from './Layout'
import axios from 'axios'
import {UserContextProvider} from './UserContext'


function App() {
  axios.defaults.baseURL = 'http://localhost:3001'
  axios.defaults.withCredentials = true
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/'  element={<Layout />} > 
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}                               

export default App
