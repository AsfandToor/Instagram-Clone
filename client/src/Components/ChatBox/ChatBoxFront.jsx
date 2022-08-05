import { 
    Box,
    Typography,
    Button
} from "@mui/material"
import { styled } from "@mui/system"

const ChatBoxFront = () => {
    const Container = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1'
    })
    const SendButton = styled(Button)({
        fontSize: '1.3rem',
        fontWeight: 600,
        textTransform: 'none',
        padding: '.5rem 1rem',
        backgroundColor: '#2785e8'
    })
  return (
    <Container>
        <img src="images/inbox-icon.png" alt="" />
        <Typography sx={{
            fontSize: '2rem',
            fontWeight: 300,
            marginTop: '1rem'
        }}>Your Messages</Typography>
        <Typography sx={{
            fontSize: '1.5rem',
            color: '#5e5e5e',
            margin: '2rem 0'
        }}>Send private photos and messages to a friend or group.</Typography>
        <SendButton variant="contained">Send message</SendButton>
    </Container>
  )
}

export default ChatBoxFront