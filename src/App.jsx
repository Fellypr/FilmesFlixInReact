import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
    <Navbar/> 
    <Outlet/>
      
    </>
  )
}

export default App


//PAREI NO MINUTO 28:16