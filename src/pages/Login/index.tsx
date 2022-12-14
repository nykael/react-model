import { useState } from 'react'
import { Button } from '../../components/Button'
import { InputText } from '../../components/InputText'
import { Container, DivLeft, DivRight } from './style'

export function Login() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  console.log(name, password)

  return (
    <Container>
      <DivLeft>
        <h1>Tela de Login</h1>
        <InputText title="E-mail" onChange={(e) => setName(e.target.value)} />
        <InputText
          title="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          onClick={() => console.log(name, password)}
          title="Entrar"
          variant="secondary"
          disabled={false}
        />
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
