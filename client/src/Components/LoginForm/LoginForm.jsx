import { useState } from 'react'
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
    const initalFields = {
        email: "",
        password: ""
    }
    const [formFields, setFormFields] = useState(initalFields)
    const formSubmitHandler = (e) => {
        e.preventDefault()
    }
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
            <form onSubmit={formSubmitHandler}>
                <TextField 
                    fieldName="email"
                    fieldPlaceholder="Email Address"
                    fieldType="text"
                    info={formFields}
                    setInfo={setFormFields}/>
                <TextField 
                    fieldName="password"
                    fieldPlaceholder="Password"
                    fieldType="password"
                    info={formFields}
                    setInfo={setFormFields}/>
            </form>
        </Box>
        <StretchedButton clickHandler={formSubmitHandler}/>
        <Divider />
        <FacebookLoginButton />
        <Link sx={{ textDecoration: 'none', fontSize: '1.2rem' }}>Forgot your password?</Link>
    </Paper>
  )
}

export default LoginForm