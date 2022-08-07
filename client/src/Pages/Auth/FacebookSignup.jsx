import { Box } from "@mui/material"
import { styled } from "@mui/system"
import FacebookForm from "../../Components/FacebookForm/FacebookForm"
import AuthRedirect from "../../Components/AuthRedirect/AuthRedirect"

const FacebookSignup = () => {
  const Container = styled(Box)({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: '2rem'
  })
  return (
    <Container>
        <FacebookForm />
        <AuthRedirect auth="signup"/>
    </Container>
  )
}

export default FacebookSignup