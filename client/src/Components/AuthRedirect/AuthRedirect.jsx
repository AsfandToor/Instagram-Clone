import { 
    Paper,
    Typography
} from "@mui/material"
import { Link } from "react-router-dom"

const AuthRedirect = ({ auth }) => {
    const linkStyles = {
        fontSize: '1.4rem',
        textDecoration: 'none',
        marginLeft: '1rem',
        cursor: 'pointer'
    }
  return (
    <Paper sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        width: '300px',
        padding: '3rem',
        marginTop: '2rem'
    }}>
        <Typography sx={{
            fontSize: '1.4rem'
        }}>
            { auth == 'signup' ? "Have an account?": "Don't have an account?"}
        </Typography>
        {
             auth == 'signup' ?
             <Link to="/login" style={linkStyles}>
                Log In
            </Link> :
            <Link to="/signup" style={linkStyles}>
                Sign up
            </Link>
        }
        
    </Paper>
  )
}

export default AuthRedirect