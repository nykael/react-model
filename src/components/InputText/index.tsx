import { TextInput, ErrorMessage, IconEyes } from './styles'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
interface InputProps {
  title: string
  onChange: (e: any) => void
  type?: string
  errorMessage?: string | null
  onClick?: (e: any) => void
  isVisible?: boolean
  isPassword?: boolean
}

export function InputText({
  title,
  onChange,
  type = 'text',
  errorMessage,
  onClick,
  isVisible,
  isPassword,
}: InputProps) {
  return (
    <div>
      <TextInput onChange={onChange}>
        <input type={type} />
        <label>{title}</label>

        {isPassword ? (
          <IconEyes onClick={onClick}>
            {isVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </IconEyes>
        ) : null}
      </TextInput>
      <ErrorMessage>
        <p>{errorMessage}</p>
      </ErrorMessage>
    </div>
  )
}
