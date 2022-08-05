import { Box } from "@mui/material"
import SideBarProfile from "./SideBarProfile"

const SideBar = () => {
  return (
    <Box sx={{
        margin: '1rem 2rem'
    }}>
        <SideBarProfile />
    </Box>
  )
}

export default SideBar