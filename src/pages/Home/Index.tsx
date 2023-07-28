import { CoffeCard } from './components/CoffeCard/Index'
import { Intro } from './components/Intro/Index'
import { GridCoffeList, HomeContainer, TitleGrid } from './styles'
import { CoffeData } from '../../context/CoffeData'

export function Home() {
  const data = CoffeData
  return (
    <HomeContainer>
      <Intro />
      <TitleGrid>Nossos Cafés</TitleGrid>
      <GridCoffeList>
        {data.map((item) => (
          <CoffeCard
            key={item.id}
            pathImage={item.pathImage}
            tag={item.tag}
            name={item.name}
            description={item.description}
          />
        ))}
      </GridCoffeList>
    </HomeContainer>
  )
}
