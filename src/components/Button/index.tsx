import { ButtonContainer, ButtonVariant } from './styles'

interface ButtonsProps {
  variant?: ButtonVariant
  title: string
  disabled: boolean
  onClick?: () => void
}

export function Button({
  variant = 'primary',
  title,
  disabled,
  onClick,
}: ButtonsProps) {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled} variant={variant}>
      {disabled ? 'Carregando...' : title}
    </ButtonContainer>
  )
}
