import { ButtonContainer, ButtonVariant } from './styles'

interface ButtonsProps {
  variant?: ButtonVariant
  title: string
  disabled: boolean
}

export function Button({ variant = 'primary', title, disabled }: ButtonsProps) {
  return (
    <ButtonContainer disabled={disabled} variant={variant}>
      {disabled ? 'Carregando...' : title}
    </ButtonContainer>
  )
}
