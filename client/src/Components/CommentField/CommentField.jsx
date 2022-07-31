import { useState } from "react"
import { 
    Box,
    Button
} from "@mui/material"
import EmojiPicker from "../EmojiPicker/EmojiPicker"

const CommentField = () => {
    const [comment, setComment]=useState('')
    const commentFieldStyles = {
        border: 'none',
        outline: 'none',
        fontSize: '1.4rem',
        fontFamily: 'inherit',
        resize: 'none',
        flex: 1
    }
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '.5rem 1rem'
    }}>
        <EmojiPicker/>
        <textarea 
            placeholder="Add a comment..." 
            name="comment" 
            rows="1" 
            style={commentFieldStyles}
            value={comment}
            onChange={(e) => setComment(e.target.value)} />
        <Button sx={{
            fontWeight: '600',
            fontSize: '1.3rem',
            textTransform: 'none'
        }}>Post</Button>
    </Box>
  )
}

export default CommentField