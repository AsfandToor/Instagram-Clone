import { 
    Box,
    Typography,
    Link
} from "@mui/material"
import ChatCard from "./ChatCard"

const ChatLogs = () => {
  return (
    <Box sx={{
        height: 'calc(100% - 55px)',
        overflowY: 'scroll'
    }}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem'
        }}>
            <Typography sx={{
                fontSize: '1.5rem',
                color: '#3e3e3e',
                fontWeight: '600'
            }}>Messages</Typography>
            <Link sx={{
                fontSize: '1.5rem',
                textDecoration: 'none',
                cursor: 'pointer'
            }}>Requests</Link>
        </Box>
        <Box>
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
        </Box>
    </Box>
  )
}

export default ChatLogs