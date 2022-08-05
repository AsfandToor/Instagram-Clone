import { 
    Box,
    Typography
} from "@mui/material"
import { styled } from "@mui/system"

const ChatCard = () => {
    const ImageContiner = styled(Box)({
        width: '65px',
        height: '65px',
        borderRadius: '50%',
        overflow: 'hidden'
    })
    const UnreadMarker = styled(Box)({
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: '#2785e8'
    })
    const imageStyles = {
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
        padding: '.8rem 1.6rem',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#2785e811'
        }
    }}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <ImageContiner>
                <img src="images/person.jpg" alt="" style={imageStyles}/>
            </ImageContiner>
            <Box sx={{
                marginLeft: '1rem'
            }}>
                <Typography sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600
                }}>
                    Asfand Yar Amer
                </Typography>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Typography sx={{
                        fontWeight: 500,
                        fontSize: '1.3rem',
                        color: '#8e8e8e'
                    }}>
                        Hello! How are you?
                    </Typography>
                    <Typography sx={{
                        color: '#8e8e8e',
                        fontSize: '1.2rem',
                        marginLeft: '1rem'
                    }}>
                        3 h
                    </Typography>
                </Box>
            </Box>
        </Box>
        <UnreadMarker />
    </Box>
  )
}

export default ChatCard