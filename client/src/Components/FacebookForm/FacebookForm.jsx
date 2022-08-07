import { useState } from 'react'
import { 
    Paper,
    Box
} from '@mui/material'
import TextField from '../TextField/TextField'
import StretchedButton from '../Buttons/StretchedButton'

const FacebookForm = () => {
    const initalFields = {
        name: "",
        username: "",
        password: ""
    }
    const [formFields, setFormFields] = useState(initalFields)
    const formSubmitHandler = async (e) => {
        e.preventDefault()
        try {
        }
        catch(error) {
            console.log(error)
        }
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
            marginBottom: '2rem'
        }}>
            <img src="images/instagram-logo.png" alt='Instagram Logo'/>
        </Box>
        <Box sx={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginBottom: '1.5rem'
        }}>
            <img style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
             }} src="images/person.jpg" alt="Image" />
        </Box>
        <Box width='100%' marginBottom='1rem'>
            <form onSubmit={formSubmitHandler}>
                <TextField 
                    fieldName="name"
                    fieldPlaceholder="Full Name"
                    fieldType="text"
                    info={formFields}
                    setInfo={setFormFields}/>

                <TextField 
                    fieldName="username"
                    fieldPlaceholder="Username"
                    fieldType="text"
                    info={formFields}
                    setInfo={setFormFields}/>
                    
                <TextField 
                    fieldName="password"
                    fieldPlaceholder="Password"
                    fieldType="password"
                    info={formFields}
                    setInfo={setFormFields}/>
                <button style={{ display: 'none' }} type='submit'></button>
            </form>
        </Box>
        <StretchedButton clickHandler={formSubmitHandler}/>
    </Paper>
  )
}

export default FacebookForm