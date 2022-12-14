import { ButtonContainer, ButtonVariant } from './styles'

interface ButtonsProps {
  variant?: ButtonVariant
  title: string
}

export function Button({ variant = 'primary', title }: ButtonsProps) {
  return <ButtonContainer variant={variant}>{title}</ButtonContainer>
}
