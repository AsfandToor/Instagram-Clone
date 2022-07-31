import { useState } from "react"
import { Box, Typography, Link } from "@mui/material"
import { 
    FavoriteBorder as Favorite,
    Reply,
    NearMe,
    BookmarkBorder as Bookmark
} from "@mui/icons-material"

const PostContent = () => {
    const a = "Tell me now who taught you how to hate, it isn't in your blood, not in the part of what you are made so let this be understood, somebody taught you how to hate"
    const [toggleLearnMore, setToggleLearnMore] = useState(false)
    const contentStyles = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
    }
  return (
    <Box>
        <Box sx={{
            width: '100%',
            height: '450px'
        }}>
            <img src="images/person.jpg" alt="" style={contentStyles}/>
        </Box>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Box sx={{
                padding: '.5rem 1rem'
            }}>
                <Favorite sx={{
                    fontSize: '2.8rem',
                    marginRight: '1rem',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#aeaeae55'
                    }
                }}/>
                <Reply sx={{
                    fontSize: '2.8rem',
                    marginRight: '1rem',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#aeaeae55'
                    }
                }}/>
                <NearMe sx={{
                    fontSize: '2.8rem',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#aeaeae55'
                    }
                }}/>
            </Box>
            <Box>
                <Bookmark sx={{
                    fontSize: '2.8rem',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#aeaeae55'
                    }
                }}/>
            </Box>
        </Box>
        <Box sx={{
            marginLeft: '1rem'
        }}>
            <Typography sx={{
                fontSize: '1.3rem',
                fontWeight: '600'
            }}>123 likes</Typography>
        </Box>
        <Box sx={{
            marginLeft: '1rem',
            display: 'flex',
            alignItems: 'baseline'
        }}>
            <Typography sx={{
                fontSize: '1.3rem',
                fontWeight: '600'
            }}>world.of.comics</Typography>
            <Typography sx={{
                marginLeft: '.5rem',
                fontSize: '1.3rem'
            }}>
                { 
                    a.length >= 45 && !toggleLearnMore ?
                    <>
                        {a.slice(0, 45)}
                        <Link sx={{
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }} onClick={() => setToggleLearnMore(true)}> ..more</Link>
                    </>
                    :
                    <>
                        {a}
                        <Link sx={{
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }} onClick={() => setToggleLearnMore(false)}> ..less</Link>
                    </>
                }
            </Typography>
        </Box>
        <Box marginLeft="1rem">
            <Typography sx={{
                fontSize: '1.3rem',
                fontWeight: '600'
            }}>
                <Link sx={{
                    textDecoration: 'none',
                    cursor: 'pointer'
                }}>#relatable </Link>   
                <Link sx={{
                    textDecoration: 'none',
                    cursor: 'pointer'
                }}>#comics </Link>
                <Link sx={{
                    textDecoration: 'none',
                    cursor: 'pointer'
                }}>#tours </Link>       
            </Typography>
        </Box>
        <Box marginLeft="1rem">
            <Typography sx={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginTop: '1rem'
                }}>
                    View all 153 comments
            </Typography>
        </Box>
        <Box marginLeft="1rem">
            <Typography sx={{
                    fontSize: '1.3rem',
                    fontWeight: '500',
                }}>
                    14 hours ago
            </Typography>
        </Box>
    </Box>
  )
}

export default PostContent