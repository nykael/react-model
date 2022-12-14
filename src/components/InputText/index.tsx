import { TextInput } from './styles'

interface InputProps {
  title: string
  onChange: (e: any) => void
  type?: string
}

export function InputText({ title, onChange, type = 'text' }: InputProps) {
  return (
    <TextInput onChange={onChange}>
      <input type={type} />
      <label>{title}</label>
    </TextInput>
  )
}
