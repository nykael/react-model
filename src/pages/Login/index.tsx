import { Button } from '../../components/Button'
import { InputText } from '../../components/InputText'
import { Container, DivLeft, DivRight } from './style'

export function Login() {
  return (
    <Container>
      <DivLeft>
        <h1>Tela de Login</h1>
        <InputText title="CPF" />
        <InputText title="Senha" />

        <Button title="Entrar" variant="secondary" />
      </DivLeft>

      <DivRight>
        <img
          src={
            'https://bigpyx.com/wp-content/uploads/2021/02/contact-us-figure.png'
          }
          alt="Login"
          height={400}
        />
      </DivRight>
    </Container>
  )
}
