import { 
    Box,
    Button
} from "@mui/material"
import { Facebook } from '@mui/icons-material'

const FacebookLoginButton = ({ onClick }) => {
  return (
    <Box width='100%' onClick={onClick}>
        <Button sx={{
            width: '100%',
            fontWeight: 'bold',
            fontSize: '1.3rem',
            marginBottom: '2rem',
            backgroundColor: '#0095f6',
            boxShadow: 'unset',
            border: 'none',
            outline: 'none'
        }} variant="contained" startIcon={<Facebook />}>Log in with Facebook</Button>
    </Box>
  )
}

export default FacebookLoginButton