import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 50px;
  border-radius: 8px;
  border: 0;
  width: 100%;
  color: ${({ theme }) => theme.WHITE};
  border-radius: 20px;

  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return css`
          background-color: ${({ theme }) => theme.PRIMARY};
        `
      case 'secondary':
        return css`
          background-color: ${({ theme }) => theme.BLUE_LIGHT};
        `
      case 'danger':
        return css`
          background-color: ${({ theme }) => theme.RED};
        `
      case 'success':
        return css`
          background-color: ${({ theme }) => theme.GREEN_500};
        `
      default:
        break
    }
  }}

  cursor: pointer;
`
