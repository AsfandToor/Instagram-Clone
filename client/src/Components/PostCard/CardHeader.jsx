import { 
    Box,
    Typography
} from "@mui/material"
import { MoreHoriz } from "@mui/icons-material"

const CardHeader = () => {
    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
    }
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '.5rem 1rem'
    }}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <Box sx={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                overflow: 'hidden'
            }}>
                <img style={imageStyle} src="images/person.jpg" alt="" />
            </Box>
            <Typography sx={{
                fontSize: '1.4rem',
                color: '#8e8e8e',
                fontWeight: '600',
                cursor: 'pointer',
                marginLeft: '1rem'
            }}>world.of.comics</Typography>
        </Box>
        <Box>
            <MoreHoriz sx={{ 
                fontSize: '2rem',
                cursor: 'pointer'
            }}/>
        </Box>
    </Box>

  )
}

export default CardHeader