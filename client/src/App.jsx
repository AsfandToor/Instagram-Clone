import { 
  Routes,
  Route
} from 'react-router-dom'
import Signup from "./Pages/Auth/Signup"
import Login from "./Pages/Auth/Login"
import Navbar from './Components/Navbar/Navbar'


const App = () => {
  return (
    <Navbar />
    // <Routes>
    //   <Route path='/login' element={<Login />}/>
    //   <Route path='/signup' element={<Signup />}/>
    // </Routes>
  )
}

export default App