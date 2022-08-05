import { 
    Paper,
    Typography,
} from "@mui/material"
import CardHeader from "./CardHeader"
import PostContent from "../PostContent/PostContent"
import CommentField from "../CommentField/CommentField"

const PostCard = () => {
  return (
    <Paper sx={{ 
        width: '460px',
        marginBottom: '2rem'
    }}>
        <CardHeader />
        <PostContent />
        <CommentField />
    </Paper>
  )
}

export default PostCard