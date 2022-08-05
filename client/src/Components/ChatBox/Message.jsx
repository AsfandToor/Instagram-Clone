import { 
    Box,
    Typography
} from "@mui/material"
import { styled } from "@mui/system"

const Message = ({ type, children }) => {
    const MessageContainer = styled(Box)({
        display: 'flex',
        justifyContent: type == 'reciever' ? 'flex-end' : 'flex-start',
        marginBottom: '1rem'
    })

    const Message = styled(Typography)({
        fontSize: '1.5rem',
        padding: '1rem 1.5rem',
        borderRadius: '25px',
        border: '1px solid #e8e8e8',
        backgroundColor: type == 'reciever' ? '#e8e8e8' : '#fff',
        maxWidth: '300px'
    })
  return (
    <MessageContainer>
        <Message>{ children }</Message>
    </MessageContainer>
  )
}

export default Message