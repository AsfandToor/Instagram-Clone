import { 
    Box,
    Typography,
    Link
} from "@mui/material"
import { styled } from "@mui/system"

const SideBarProfile = () => {
    const ImageContainer = styled(Box)({
        width: '65px',
        height: '65px',
        overflow: 'hidden',
        borderRadius: '50%',
        cursor: 'pointer'
    })
    const Container = styled(Box)({
        display: 'flex',
        alignItems: 'center'
    })
    const imageStyles = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
    }
  return (
    <Container sx={{
        justifyContent: 'space-between',
        width: '300px'
    }}>
        <Container>
            <ImageContainer>
                <img style={imageStyles} src="images/person.jpg" alt="" />
            </ImageContainer>
            <Box sx={{
                marginLeft: '1rem'
            }}>
                <Typography sx={{
                    fontSize: '1.4rem',
                    color: '#3e3e3e',
                    fontWeight: '600',
                    cursor: 'pointer'
                }}>world.of.comics</Typography>
                <Typography sx={{
                    fontSize: '1.4rem',
                    color: '#8e8e8e'
                }}>John Peterson</Typography>
            </Box>
        </Container>
        <Box>
            <Link sx={{
                fontSize: '1.3rem',
                fontWeight: '500',
                textDecoration: 'none',
                cursor: 'pointer'
            }}>Switch</Link>
        </Box>
    </Container>
  )
}

export default SideBarProfile