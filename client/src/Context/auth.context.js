import { SignalCellularNullOutlined } from "@mui/icons-material";
import { 
    createContext, 
    useEffect, 
    useState
} from "react";
import { auth } from "../Firebase/firebase"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            console.log(user)
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])
    const value = {
        currentUser
    }

    return <AuthContext.Provider value={value}>{!loading ? children : null }</AuthContext.Provider>
}