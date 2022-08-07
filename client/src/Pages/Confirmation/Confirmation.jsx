import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { 
    Box,
    Paper,
    Typography,
    Link,
    TextField
} from "@mui/material"
import { MailOutline as MailIcon } from "@mui/icons-material"
import { styled } from "@mui/system"
import AuthRedirect from "../../Components/AuthRedirect/AuthRedirect"
import StretchedButton from "../../Components/Buttons/StretchedButton"
import { getUserData } from "../../Firebase/firebase"
import emailjs from "@emailjs/browser"

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
    const [formCode, setFormCode] = useState('')
    const { state } = useLocation()
    useEffect(() => {
        const fetchUserData = async () => {
            const response = await getUserData(state.user_id)
            const { email, name } = response.data()
            const hash = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
            await emailjs.send("service_hhe8izr", "template_eicdwlw", { email, name, code: hash }, "aE5rSHgFppRF6PKDQ")
            setCode(hash)
        }
        fetchUserData()
    }, [])
    const formSubmitHandler = (e) => {
        e.preventDefault()
        if (formCode === code)
            console.log("Verified")
        else
            console.log("Wrong Code")
    }
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
            <form onSubmit={formSubmitHandler}>
                <div style={TextFieldBox}>
                    <input 
                        name="code"
                        placeholder="Confirmation Code" 
                        type="text" 
                        value={formCode}
                        style={TextFieldStyle}
                        onChange={e => setFormCode(e.target.value)}/>
                </div>
                <button type="submit" style={{display: 'none'}}></button>
            </form>
            <StretchedButton clickHandler={formSubmitHandler}/>
        </Container>
        <AuthRedirect auth="signup"/>
    </Wrapper>
  )
}

export default Confirmation