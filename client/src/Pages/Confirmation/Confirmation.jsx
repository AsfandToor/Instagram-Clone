import { 
    Box,
    Paper,
    Typography,
    Link,
    TextField
} from "@mui/material"
import { MailOutline as MailIcon } from "@mui/icons-material"
import { styled } from "@mui/system"
import { useState } from "react"
import AuthRedirect from "../../Components/AuthRedirect/AuthRedirect"
import StretchedButton from "../../Components/Buttons/StretchedButton"

const Wrapper = styled(Box)({
    minHeight: 'calc(100% - 59px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8', 
    paddingTop: '3rem'
})

const Container = styled(Paper)({
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '3rem'
})

const HeaderText = styled(Typography)({
    fontSize: '2rem',
    marginTop: '1.5rem',
    fontWeight: '500'
})

const MainText = styled(Typography)({
    fontSize: '1.4rem',
    textAlign: 'center',
    marginTop: '1rem'
})

const TextFieldBox = {
    border: '1px solid lightgray',
    borderRadius: '2px',
    backgroundColor: '#f5f5f5 ',
    padding: '1rem',
    width: '80%',
    margin: '1rem 0',
}

const TextFieldStyle = {
    fontSize: '1.4rem',
    border: 'none',
    outline: 'none',
    width: '100%',
    backgroundColor: 'transparent'
}

const Confirmation = () => {
    const [code, setCode] = useState('')

  return (
    <Wrapper>
        <Container>
            <MailIcon sx={{
                fontSize: '10rem'
            }}/>
            <HeaderText>Verify Your Email</HeaderText>
            <MainText>Enter the confirmation code that we sent to asfand.yar67@hotmail.com. 
            <Link sx={{
                textDecoration: 'none',
                cursor: 'pointer',
                fontWeight: '600'
            }}>Resend Code.</Link></MainText>
            <div style={TextFieldBox}>
                <input 
                    name="confirmation"
                    placeholder="Confirmation Code" 
                    type="text" 
                    value={code}
                    style={TextFieldStyle}
                    onChange={e => setCode(e.target.value)}/>
            </div>
            <StretchedButton />
        </Container>
        <AuthRedirect auth="signup"/>
    </Wrapper>
  )
}

export default Confirmation