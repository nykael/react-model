import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%;
        // cada 1 rem = 10px
    }

    body {
        background-color: ${({ theme }) => theme.BLACK};
        color: ${({ theme }) => theme.BLACK};
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
    }
`
