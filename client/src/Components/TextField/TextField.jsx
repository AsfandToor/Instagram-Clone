import { Box } from "@mui/system"
import { styled } from "@mui/system"

const TextField = ({ fieldName, fieldPlaceholder, fieldType }) => {
    const TextFieldBox = styled(Box)({
        border: '1px solid lightgray',
        borderRadius: '2px',
        backgroundColor: '#f5f5f5 ',
        padding: '1rem',
        marginBottom: '1rem'
    })
    const TextFieldStyle = {
        fontSize: '1.2rem',
        border: 'none',
        outline: 'none',
        width: '100%',
        backgroundColor: 'transparent'
    }

  return (
    <TextFieldBox>
        <input 
        name={fieldName} 
        placeholder={fieldPlaceholder} 
        type={fieldType} 
        style={TextFieldStyle} />
    </TextFieldBox>
  )
}

export default TextField