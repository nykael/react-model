import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { CarDTO } from '../../dtos/carDTO'
import { api } from '../../services/api'
import { Container, Divider, DivGrid } from './styles'

export function Home() {
  const [dataCard, setDataCard] = useState<CarDTO>({} as CarDTO)

  async function fecthApi() {
    const resp = await api.get('/cars')
    setDataCard(resp.data)
  }

  useEffect(() => {
    fecthApi()
  }, [])
  return (
    <Container>
      <Header />
      <Divider />

      <DivGrid>
        <Card data={dataCard} />
      </DivGrid>
    </Container>
  )
}
