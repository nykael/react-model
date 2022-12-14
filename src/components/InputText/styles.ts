import styled from 'styled-components'

export const TextInput = styled.div`
  position: relative;

  input {
    border: solid 0.15rem #9e9e9e9e;
    border-radius: 1.6rem;
    background-color: none;
    padding: 1.6rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.GRAY_200};

    &:focus {
      outline: none;
      border: 0.15rem solid #1a73e8;
    }

    &:focus ~ label {
      background-color: ${({ theme }) => theme.SECONDARY};
      padding: 0 0.8rem;
      color: ${({ theme }) => theme.GRAY_200};
    }
  }

  label {
    position: absolute;
    left: 16px;
    color: ${({ theme }) => theme.GRAY_200};
    pointer-events: none;
    transform: translateY(1.6rem);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(-39%) scale(0.9);
  }
`
