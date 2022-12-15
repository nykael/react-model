import { CarDTO } from '../../dtos/carDTO'
import { Container, About, Rent, Details, CarImage } from './style'

interface Props {
  data: CarDTO
}

export function Card({ data }: Props) {
  console.log('AQUI', data)
  return (
    <Container>
      {data.id ? (
        <Details>
          <p>{data.brand}</p>
          <p>{data.name}</p>
        </Details>
      ) : (
        'Carregando...'
      )}

      <CarImage>
        <img
          src="https://production.autoforce.com/uploads/version/profile_image/6737/comprar-tiptronic_13d79f3c1b.png"
          alt="card"
          height={260}
        />
        <Rent>
          <p>AO DIA</p>
          <p>R$ 580</p>
        </Rent>

        <About>
          <p>
            Este é automóvel desportivo. Surgiu do lendário touro de lide
            indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
            para quem gosta de acelerar.
          </p>
        </About>
      </CarImage>
    </Container>
  )
}
