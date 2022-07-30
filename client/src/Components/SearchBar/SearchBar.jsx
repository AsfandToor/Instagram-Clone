import { Box } from "@mui/material"
import { Search } from "@mui/icons-material"
import { styled } from "@mui/system"

const SearchBar = () => {
    const searchBarStyles = {
        border: 'none',
        outline: 'none',
        fontSize: '1.5rem',
        backgroundColor: 'transparent'
    }
    const SearchContainer = styled(Box)({
        alignItems: 'center',
        backgroundColor: '#efefef',
        padding: '1rem 1.5rem',
        borderRadius: '5px',
    })
  return (
    <SearchContainer sx={{
        display: {
            xs: 'none',
            md: 'flex'
        }
    }}>
        <Search sx={{
            fontSize: '2.5rem',
            color: '#8e8e8e'
        }}/>
        <input style={searchBarStyles} type="text" placeholder="Search"/>
    </SearchContainer>
  )
}

export default SearchBar