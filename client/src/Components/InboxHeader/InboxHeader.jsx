import { 
    Box,
    Typography
} from "@mui/material"
import { Edit } from '@mui/icons-material';

const InboxHeader = () => {
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        borderBottom: '1px solid #e8e8e8'
    }}>
        <Typography sx={{
            textAlign: 'center',
            flex: 1,
            fontSize: '1.6rem',
            color: '#3e3e3e',
            fontWeight: 600,
            cursor: 'pointer'
        }}>world.of.comics</Typography>
        <Edit sx={{
            fontSize: '2rem',
            cursor: 'pointer'
        }}/>
    </Box>
  )
}

export default InboxHeader