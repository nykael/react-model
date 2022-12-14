import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        // cada 1 rem = 10px
    }

    body {
        background-color: ${({ theme }) => theme.PRIMARY};
        color: ${({ theme }) => theme.BLACK};
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
    }
`
