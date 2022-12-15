import styled from 'styled-components'

export const TextInput = styled.div`
  position: relative;

  input {
    border: solid 0.15rem #9e9e9e9e;
    border-radius: 20px;
    background-color: none;
    padding: 1.6rem 1.9rem;
    width: 100%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.GRAY_200};
    margin-top: 1.6rem;

    &:focus {
      outline: none;
      border: 0.15rem solid #1a73e8;
    }

    &:focus ~ label {
      background-color: ${({ theme }) => theme.SECONDARY};
      padding: 0 2rem;
      color: ${({ theme }) => theme.GRAY_200};
    }
  }

  label {
    position: absolute;
    left: 16px;
    color: ${({ theme }) => theme.GRAY_200};
    font-weight: 500;
    pointer-events: none;
    transform: translateY(1.6rem);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(-49%) scale(0.9);
  }
`

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.RED};
  margin-bottom: 1.5rem;

  p {
    padding: 0 1rem;
    margin-top: 0.1rem;
  }
`

export const IconEyes = styled.div`
  position: absolute;
  left: 92%;
  bottom: 1rem;
  cursor: pointer;
`
