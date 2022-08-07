import { useContext } from 'react'
import { 
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { AuthContext } from './Context/auth.context'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Inbox from './Pages/Inbox/Inbox'
import Signup from "./Pages/Auth/Signup"
import Login from "./Pages/Auth/Login"
import FacebookSignup from './Pages/Auth/FacebookSignup'
import Confirmation from './Pages/Confirmation/Confirmation'


const App = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route  path="/" element={currentUser ? <Home /> : <Navigate to="/login"/>}/>
        <Route  path="/inbox" element={<Inbox />}/>
        <Route  path="/verify" element={<Confirmation />}/>
      </Route>
      <Route path='/login' element={!currentUser ? <Login /> : <Navigate to="/"/>}/>
      <Route path='/signup' element={!currentUser ? <Signup /> : <Navigate to="/"/>}/>
      <Route path='/facebook-signup' element={!currentUser ? <FacebookSignup /> : <Navigate to="/"/>}/>
    </Routes>
  )
}

export default App