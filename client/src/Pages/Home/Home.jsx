import { Box } from "@mui/material"
import { styled } from "@mui/system"
import SideBar from "../../Components/SideBar/SideBar"
import PostCard from "../../Components/PostCard/PostCard"

const Home = () => {
    const Container = styled(Box)({
        display: 'flex',
        justifyContent: 'center',
        marginTop: '4rem'
    })
  return (
    <Container>
        <Box>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </Box>
        <SideBar />
    </Container>
  )
}

export default Home