import { Outlet } from "react-router-dom"
import { 
    Paper,
    Box
} from "@mui/material"
import { styled } from "@mui/system"
import SearchBar from "../SearchBar/SearchBar"
import {
    Home as HomeIcon,
    AddBox as AddIcon,
    Chat as ChatIcon,
    AssistantDirection as NavIcon,
    FavoriteBorder as FavoriteIcon
} from "@mui/icons-material"

const Navbar = () => {
    const ImageContainer = styled(Box)({
        width: '30px',
        height: '30px',
        overflow: 'hidden',
        borderRadius: '50%',
        cursor: 'pointer'
    })
  return (
    <>
        <Paper sx={{
            position: 'sticky',
            top: 0,
            padding: {
                xs: '1.3rem 2%',
                sm: '1.3rem 15%'
            },
            backgroundColor: '#fff',
            zIndex: 5
        }}>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Box>
                    <img width="100px" src="images/instagram-logo.png" alt="" />
                </Box>
                <SearchBar/>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <HomeIcon sx={{
                        fontSize: '3rem',
                        marginRight: '1rem',
                        cursor: 'pointer'
                    }}/>
                    <AddIcon sx={{
                        fontSize: '2.5rem',
                        marginRight: '1rem',
                        cursor: 'pointer'
                    }}/>
                    <ChatIcon sx={{
                        fontSize: '2.5rem',
                        marginRight: '1rem',
                        cursor: 'pointer'
                    }}/>
                    <NavIcon sx={{
                        fontSize: '2.5rem',
                        marginRight: '1rem',
                        cursor: 'pointer'
                    }}/>
                    <FavoriteIcon sx={{
                        fontSize: '2.5rem',
                        marginRight: '1rem',
                        cursor: 'pointer'
                    }}/>
                    <ImageContainer>
                        <img style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }} src="images/person.jpg" alt="" />
                    </ImageContainer>
                </Box>
            </Box>
        </Paper>
        <Outlet />
    </>
  )
}

export default Navbar