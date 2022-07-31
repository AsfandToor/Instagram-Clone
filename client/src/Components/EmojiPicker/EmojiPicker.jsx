import { useState } from "react";
import { Box } from "@mui/material";
import { EmojiEmotionsOutlined as Emoji } from '@mui/icons-material';
import Picker from "emoji-picker-react";

const EmojiPicker = () => {
    const [emojiToggler, setEmojiToggler] = useState(false)
  return (
    <Box sx={{
        position: 'relative'
    }}>
        <Emoji sx={{
            fontSize: '2.5rem',
            marginRight: '1rem',
            cursor: 'pointer'
        }} onClick={ () => setEmojiToggler(prev => !prev) }/>
        {
            emojiToggler ?
            <Box sx={{
                position: 'absolute'
            }}>
                <Picker/>
            </Box>:
            null
        }
    </Box>
  )
}

export default EmojiPicker