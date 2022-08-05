import { 
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Inbox from './Pages/Inbox/Inbox'
import Signup from "./Pages/Auth/Signup"
import Login from "./Pages/Auth/Login"
import Confirmation from './Pages/Confirmation/Confirmation'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route  path="/" element={<Home />}/>
        <Route  path="/inbox" element={<Inbox />}/>
        <Route  path="/verify" element={<Confirmation />}/>
      </Route>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
    </Routes>
  )
}

export default App