import { 
  Box
} from "@mui/material"
import { styled } from "@mui/system"

const TextField = ({ fieldName, fieldPlaceholder, fieldType, info, setInfo }) => {
    const textFieldBox = {
        border: '1px solid lightgray',
        borderRadius: '2px',
        backgroundColor: '#f5f5f5 ',
        padding: '1rem',
        marginBottom: '1rem'
    }
    const TextFieldStyle = {
        fontSize: '1.2rem',
        border: 'none',
        outline: 'none',
        width: '100%',
        backgroundColor: 'transparent'
    }

    const fieldHandler = (e) => {
      setInfo({ ...info, [fieldName]: e.target.value })
    }

  return (
    <div style={textFieldBox}>
        <input 
        name={fieldName} 
        placeholder={fieldPlaceholder} 
        type={fieldType} 
        value={info[fieldName]}
        style={TextFieldStyle}
        onChange={fieldHandler} />
    </div>
  )
}

export default TextField