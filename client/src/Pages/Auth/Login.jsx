import { Box } from "@mui/material"
import { styled } from "@mui/system"
import LoginForm from "../../Components/LoginForm/LoginForm"
import AuthRedirect from "../../Components/AuthRedirect/AuthRedirect"
import LoginImage from "../../Components/LoginImage/LoginImage"

const Login = () => {
  const Container = styled(Box)({
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8'
  })
  return (
    <Container>
      <LoginImage />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <LoginForm />
        <AuthRedirect auth="login"/>
      </Box>
    </Container>
  )
}

export default Login