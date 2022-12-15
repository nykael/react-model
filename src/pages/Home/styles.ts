import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1700;
  margin: 0 18%;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.RED_DARK};
  margin-top: 5rem;
`
export const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
