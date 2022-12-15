import { Button } from '../../components/Button'
import { InputText } from '../../components/InputText'
import { Container, DivLeft, DivRight } from './style'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'

interface FormData {
  email: string
  password: string
}

export function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const [passwordVisible, setPasswordVisible] = useState(false)

  function handleForm(data: FormData) {
    console.log(data)
  }

  return (
    <Container>
      <DivLeft>
        <h1>Tela de Login</h1>
        <Controller
          control={control}
          name="email"
          rules={{ required: 'Informe o e-mail' }}
          render={({ field: { onChange } }) => (
            <InputText
              title="E-mail"
              type="email"
              onChange={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: 'Informe a senha' }}
          render={({ field: { onChange } }) => (
            <InputText
              title="Senha"
              type={passwordVisible ? 'text' : 'password'}
              onChange={onChange}
              isPassword={true}
              isVisible={passwordVisible}
              onClick={() => setPasswordVisible(!passwordVisible)}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Button
          onClick={handleSubmit(handleForm)}
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
