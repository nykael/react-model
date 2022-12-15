import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 2rem;
  height: 16rem;
  background-color: ${({ theme }) => theme.RED_DARK};
`

export const DivMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MenuOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  ul {
    display: flex;
    gap: 4rem;
    font-size: 2rem;
    list-style: none;
    cursor: pointer;
  }
`
