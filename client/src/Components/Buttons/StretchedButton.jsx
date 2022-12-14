import { 
    Box, 
    Button
} from "@mui/material"

const StretchedButton = ({ clickHandler }) => {
  return (
    <Box width='100%'>
        <Button
        onClick={clickHandler} 
        sx={{
            width: '100%',
            fontWeight: 'bold',
            fontSize: '1.3rem',
            marginBottom: '2rem',
            backgroundColor: '#0095f6',
            boxShadow: 'unset'
        }} variant='contained'>Sign Up</Button>
    </Box>
  )
}

export default StretchedButton