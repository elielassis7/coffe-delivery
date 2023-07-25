import { Header } from '../../components/Header/Index'
import { HomeContainer, TitleContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <TitleContainer>
        Encontre o café perfeito para qualquer hora do dia
      </TitleContainer>
    </HomeContainer>
  )
}
