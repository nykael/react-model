import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { InputText } from './components/InputText'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <InputText title="ENVIAR" />
      <Button title="Enviar" variant="success" />
    </ThemeProvider>
  )
}

export default App
