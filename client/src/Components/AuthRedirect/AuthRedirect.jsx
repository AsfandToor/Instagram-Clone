import { 
    Paper,
    Typography,
    Link
} from "@mui/material"

const AuthRedirect = ({ auth }) => {
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
        <Link sx={{
            fontSize: '1.4rem',
            textDecoration: 'none',
            marginLeft: '1rem',
            cursor: 'pointer'
        }}>
            { auth == 'signup' ? 'Log In': 'Sign up'}
        </Link>
    </Paper>
  )
}

export default AuthRedirect