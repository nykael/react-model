import { TextInput } from './styles'

interface InputProps {
  title: string
}

export function InputText({ title }: InputProps) {
  return (
    <TextInput>
      <input type="text" />
      <label>{title}</label>
    </TextInput>
  )
}
