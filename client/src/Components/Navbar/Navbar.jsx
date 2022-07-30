import { 
    Paper,
    Box
} from "@mui/material"
import SearchBar from "../SearchBar/SearchBar"
import {
    HomeMax as HomeIcon,
    AddBox as AddIcon,
    Chat as ChatIcon,
    AssistantDirection as NavIcon,
    FavoriteBorder as FavoriteIcon
} from "@mui/icons-material"

const Navbar = () => {
  return (
    <Paper sx={{
        padding: {
            xs: '1.3rem 2%',
            sm: '1.3rem 15%'
        }
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
            </Box>
        </Box>
    </Paper>
  )
}

export default Navbar