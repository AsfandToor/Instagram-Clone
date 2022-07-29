import { Box } from "@mui/material"
import { styled } from "@mui/system"
import SignupForm from "../../Components/SignupForm/SignupForm"
import AuthRedirect from "../../Components/AuthRedirect/AuthRedirect"

const Signup = () => {
  const Container = styled(Box)({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8'
  })
  return (
    <Container>
      <SignupForm />
      <AuthRedirect />
    </Container>
  )
}

export default Signup