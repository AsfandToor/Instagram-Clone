import { 
  Box,
  Paper
} from "@mui/material"
import { styled } from "@mui/system"
import ChatLogs from "../../Components/ChatLogs/ChatLogs"
import InboxHeader from "../../Components/InboxHeader/InboxHeader"
import ChatBox from "../../Components/ChatBox/ChatBox"

const Inbox = () => {
  // Main Inbox Wrapper
  const Wrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    height: 'calc(100vh - 71px)'
  })

  // Chat Logs and Chat Container
  const Container = styled(Paper)({
    height: '90%',
    display: 'flex',
    alignItems: 'stretch'
  })

  return (
    <Wrapper>
      <Container sx={{
        width: {
          xs: '100%',
          md: '70%'
        }
      }}>
        <Box sx={{
          width: '340px'
        }}>
          <InboxHeader />
          <ChatLogs />
        </Box>
        <ChatBox />
      </Container>
    </Wrapper>
  )
}

export default Inbox