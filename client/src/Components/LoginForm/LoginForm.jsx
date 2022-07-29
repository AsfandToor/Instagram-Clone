import { 
    Paper,
    Link,
    Box
} from '@mui/material'
import TextField from '../TextField/TextField'
import StretchedButton from '../Buttons/StretchedButton'
import FacebookLoginButton from '../Buttons/FacebookLoginButton'
import Divider from '../Divider/Divider'

const LoginForm = () => {
  return (
    <Paper sx={{
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem'
    }}>
        <Box sx={{
            marginBottom: "2rem"
        }}>
            <img src="images/instagram-logo.png" alt="Instagram Logo" />
        </Box>
        <Box width='100%' marginBottom='1rem'>
            <form>
                <TextField 
                    fieldName="credentials"
                    fieldPlaceholder="Phone number, username or email address"
                    fieldType="text"/>
                <TextField 
                    fieldName="password"
                    fieldPlaceholder="Password"
                    fieldType="password"/>
            </form>
        </Box>
        <StretchedButton />
        <Divider />
        <FacebookLoginButton />
        <Link sx={{ textDecoration: 'none', fontSize: '1.2rem' }}>Forgot your password?</Link>
    </Paper>
  )
}

export default LoginForm