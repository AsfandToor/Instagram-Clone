import { Typography } from "@mui/material"
import { Box } from "@mui/system"

const Divider = () => {
  return (
    <Box sx={{
        width: '100%',
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem'
    }}>
        <Box sx={{
            width: '40%',
            height: '1px',
            backgroundColor: '#8e8e8e'
        }} />
        
        <Typography sx={{
            fontSize: '1.3rem',
            color: '#8e8e8e'
        }}>OR</Typography>
        
        <Box sx={{
            width: '40%',
            height: '1px',
            backgroundColor: '#8e8e8e'
        }} />

    </Box>
  )
}

export default Divider