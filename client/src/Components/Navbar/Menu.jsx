import { 
    Paper,
    Box,
    Typography
} from "@mui/material"
import { styled } from "@mui/system"
import {
    AccountCircleOutlined as ProfileIcon,
    TurnedInNotOutlined as SavedIcon,
    SettingsOutlined as SettingIcon,
    LogoutOutlined as LogoutIcon
} from "@mui/icons-material"
import { logoutUserAuth } from "../../Firebase/firebase"
import { useNavigate } from "react-router-dom"

const MenuContainer = styled(Paper)({
    width: '230px',
    position: 'absolute',
    top: '150%',
    left: '-100px',
    boxShadow: '.5px .5px 10px #8e8e8e'
})
const MenuItem = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    padding: '1.5rem 1rem .5rem 2rem',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#e8e8e8'
    }
})
const Option = styled(Typography)({
    fontSize: '1.5rem',
    fontWeight: '400'
})

const Menu = () => {
    const navigation = useNavigate()
    const logoutHandler = () => {
        logoutUserAuth()
        navigation("/")
    }
  return (
    <MenuContainer>
        <MenuItem>
            <ProfileIcon sx={{
                fontSize: '2rem',
                marginRight: '1rem'
            }}/>
            <Option>Profile</Option>
        </MenuItem>
        <MenuItem>
            <SavedIcon sx={{
                fontSize: '2rem',
                marginRight: '1rem'
            }}/>
            <Option>Saved</Option>
        </MenuItem>
        <MenuItem>
            <SettingIcon sx={{
                fontSize: '2rem',
                marginRight: '1rem'
            }}/>
            <Option>Settings</Option>
        </MenuItem>
        <MenuItem sx= {{
            paddingBottom: '1rem',
            borderTop: '1px solid #e8e8e8'
        }} onClick={logoutHandler}>
            <LogoutIcon sx={{
                fontSize: '2rem',
                marginRight: '1rem'
            }}/>
            <Option>Logout</Option>
        </MenuItem>
    </MenuContainer>
  )
}

export default Menu