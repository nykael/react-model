import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.WHITE};
  margin-top: 4rem;
  width: 40rem;
  padding: 4rem 2rem;
  border-radius: 20px;
`

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-transform: uppercase;

  p:nth-of-type(1) {
    color: ${({ theme }) => theme.GRAY_200};
  }
  p:nth-of-type(2) {
    font-weight: 800;
  }
`
export const Rent = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p:nth-of-type(1) {
    color: ${({ theme }) => theme.GRAY_200};
  }
  p:nth-of-type(2) {
    font-weight: 800;
  }
`

export const About = styled.div`
  margin-top: 1rem;
  text-align: justify;
`

export const TypeCard = styled.div``

export const CarImage = styled.div`
  overflow: hidden;
`
