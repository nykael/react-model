import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1700;
  margin: 3% 10%;
  background-color: ${({ theme }) => theme.WHITE};
  height: 70rem;

  display: grid;
  grid-template-columns: 1fr 1.5fr;
  border-radius: 10px;

  @media (max-width: 1250px) {
    display: flex;
    justify-content: center;
  }
`

export const DivLeft = styled.div`
  max-width: 50rem;
  padding: 1.6rem 2rem;

  @media (max-width: 1250px) {
    width: 100%;
    padding: 2rem;
  }
`

export const DivRight = styled.div`
  background-color: ${({ theme }) => theme.SECONDARY};
  display: flex;
  padding-top: 3.8rem;
  justify-content: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 1250px) {
    display: none;
  }
`
