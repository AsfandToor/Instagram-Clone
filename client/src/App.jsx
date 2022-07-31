import { 
  Routes,
  Route
} from 'react-router-dom'
import Signup from "./Pages/Auth/Signup"
import Login from "./Pages/Auth/Login"
import Navbar from './Components/Navbar/Navbar'
import PostCard from './Components/PostCard/PostCard'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route  path="/" element={<PostCard />}/>
      </Route>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
    </Routes>
  )
}

export default App