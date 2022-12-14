import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: 0;
  margin: auto 10px;
  color: ${({ theme }) => theme.WHITE};

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
