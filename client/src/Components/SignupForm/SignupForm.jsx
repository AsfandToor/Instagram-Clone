import { 
    Paper,
    Typography,
    Box
} from '@mui/material'
import TextField from '../TextField/TextField'
import FacebookLoginButton from '../Buttons/FacebookLoginButton'
import Divider from '../Divider/Divider'
import StretchedButton from '../Buttons/StretchedButton'

const SignupForm = () => {
  return (
    <Paper sx={{
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem'
    }}>
        <Box>
            <img src="images/instagram-logo.png" alt="Instagram Logo" />
        </Box>
        <Box sx={{
            textAlign: 'center'
        }}>
            <Typography sx={{
                fontSize: '1.8rem',
                fontWeight: '600',
                color: '#8e8e8e',
                margin: '1.5rem 0'
            }}>Sign up to see photos and videos from your friends.</Typography>
        </Box>
        <FacebookLoginButton />
        <Divider />
        <Box width='100%' marginBottom='1rem'>
            <form>
                <TextField 
                    fieldName="credentials"
                    fieldPlaceholder="Mobile number or email address"
                    fieldType="text"/>
                
                <TextField 
                    fieldName="name"
                    fieldPlaceholder="Full Name"
                    fieldType="text"/>

                <TextField 
                    fieldName="username"
                    fieldPlaceholder="Username"
                    fieldType="text"/>
                    
                <TextField 
                    fieldName="password"
                    fieldPlaceholder="Password"
                    fieldType="password"/>
            </form>
        </Box>
        <Box sx={{
            width: '100%',
            textAlign: 'center',
            color: '#8e8e8e'
        }}> 
             <Typography sx={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                People who use our service may have uploaded your contact information to Instagram. Learn more
             </Typography>
             <Typography sx={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.
             </Typography>
        </Box>
        <StretchedButton />
    </Paper>
  )
}

export default SignupForm