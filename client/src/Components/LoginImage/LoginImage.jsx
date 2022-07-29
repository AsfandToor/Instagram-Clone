import { useEffect, useRef } from "react"
import { Box } from "@mui/material"


const LoginImage = () => {
    const imageRef = useRef()
    useEffect(() => {
        setInterval(() => {
            const currentSrc = imageRef.current.src
            if (currentSrc == "http://localhost:3000/images/mobile-image-1.png")
                imageRef.current.src = "http://localhost:3000/images/mobile-image-2.png"

            else if (currentSrc == "http://localhost:3000/images/mobile-image-2.png")
                imageRef.current.src = "http://localhost:3000/images/mobile-image-3.png"

            else if (currentSrc == "http://localhost:3000/images/mobile-image-3.png")
                imageRef.current.src = "http://localhost:3000/images/mobile-image-1.png"
        }, 5000)
    })
  return (
    <Box sx={{
        display: {
            xs: 'none',
            md: 'block'
        },
        position: 'relative',
        width: 'fit-content'
    }}>
        <img height="580px" src="images/mobile-container.png" alt="" />
        <img style={{
            position: 'absolute',
            right: '50px',
            top: '20px'
        }} height="500px" src="images/mobile-image-1.png" alt="" ref={imageRef}/>
    </Box>
  )
}

export default LoginImage