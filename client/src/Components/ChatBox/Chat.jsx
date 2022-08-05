import { useState, useRef, useEffect } from "react"
import { 
  Box,
  Typography,
  Button
} from "@mui/material"
import { styled } from "@mui/system"
import { 
  InfoOutlined as InfoIcon,
  InsertPhotoOutlined as PhotoIcon
} from "@mui/icons-material"
import Message from "./Message"
import EmojiPicker from "../EmojiPicker/EmojiPicker"

const Chat = () => {
  const Container = styled(Box)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  })

  const HeaderContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.2rem 2rem',
    borderBottom: '1px solid #e8e8e8',
    borderLeft: '1px solid #e8e8e8'
  })

  const NameContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  })

  const ImageContainer = styled(Box)({
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    overflow: 'hidden'
  })

  const ProfileName = styled(Typography)({
    fontSize: '1.7rem',
    fontWeight: '600',
    marginLeft: '1.5rem'
  })

  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
  }

  const ChatContainer = styled(Box)({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
    padding: '1.5rem'
  })
  
  const MessageFieldContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #8e8e8e',
    borderRadius: '25px'
  })

  const SendButton = styled(Button)({
    fontWeight: '600',
    fontSize: '1.3rem',
    textTransform: 'none',
    padding: '0'
  })
  
  const messageFieldStyles = {
      border: 'none',
      outline: 'none',
      fontSize: '1.4rem',
      fontFamily: 'inherit',
      resize: 'none',
      flex: 1
  }

  const [message, setMessage] = useState('')

  // useEffect(() => {
  //   messageRef.current.focus()
  // })

  return (
    <Container>
      <HeaderContainer>
        <NameContainer>
          <ImageContainer>
            <img style={imageStyles} component="image" src="images/person.jpg"/>
          </ImageContainer>
          <ProfileName>Asfand Yar</ProfileName>
        </NameContainer>
        <InfoIcon sx={{ 
          fontSize: '2.5rem',
          cursor: 'pointer'
        }}/>
      </HeaderContainer>
      <ChatContainer>
        <Message type="reciever">Hello</Message>
        <Message type="reciever">Asalaumalaikum </Message>
        <Message type="reciever">Wanna party?</Message>
        <Message type="reciever">Really feeling lonel</Message>
        <Message type="sender">Astagfirullah Akhi! Dis absolutely haram, you better tend your deeds before you pay the price </Message>
        <Message type="sender">Astagfirullah Akhi! Dis absolutely haram, you better tend your deeds before you pay the price </Message>
        <Message type="sender">Astagfirullah Akhi! Dis absolutely haram, you better tend your deeds before you pay the price </Message>
        <Message type="sender">Astagfirullah Akhi! Dis absolutely haram, you better tend your deeds before you pay the price </Message>
        <Message type="sender">Astagfirullah Akhi! Dis absolutely haram, you better tend your deeds before you pay the price </Message>
        <Message type="sender">Astagfirullah Akhi! Dis absolutely haram, you better tend your deeds before you pay the price </Message>
        <Message type="sender">Astagfirullah Akhi! Dis absolutely haram, you better tend your deeds before you pay the price </Message>
        <Message type="sender">Astagfirullah Akhi! Dis absolutely haram, you better tend your deeds before you pay the price </Message>
      </ChatContainer>
      <Box sx={{ padding: '2rem' }}>
        <MessageFieldContainer>
          <EmojiPicker />
          <textarea
              placeholder="Message..." 
              name="message" 
              rows="1" 
              style={messageFieldStyles}
              value={message}
              onChange={(e) => setMessage(e.target.value)}/>
          {
            message == "" ? <PhotoIcon sx={{ fontSize: '2.5rem'}}/> : <SendButton>Send</SendButton>
          }
        </MessageFieldContainer>
      </Box>
    </Container>
  )
}

// const Send = ({ message }) => {
//   const SendButton = styled(Button)({
//     fontWeight: '600',
//     fontSize: '1.3rem',
//     textTransform: 'none',
//     padding: '0'
//   })
  
//   return (
//     <>
//       {
//         message == "" ? <PhotoIcon sx={{ fontSize: '2.5rem'}}/> : <SendButton>Send</SendButton>
//       }
//     </>
//   )
// }


export default Chat