import {
  Details,
  DetailsContainer,
  ImageContainer,
  InfoContainer,
  IntroContainer,
} from './styles'
import IconCart from '../../../../assets/icons/Icon-cart.svg'
import IconBox from '../../../../assets/icons/Icon-box.svg'
import IconClock from '../../../../assets/icons/Icon-clock.svg'
import IconCoffe from '../../../../assets/icons/Icon-coffe.svg'
import IntroImage from '../../../../assets/Intro-Imagem.svg'

export function Intro() {
  return (
    <IntroContainer>
      <InfoContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
        <DetailsContainer>
          <section>
            <Details>
              <img src={IconCart} alt="" />
              <span>Compra simples e segura</span>
            </Details>
            <Details>
              <img src={IconClock} alt="" />
              <span>Entrega rápida e rastreada</span>
            </Details>
          </section>
          <section>
            <Details>
              <img src={IconBox} alt="" />
              <span>Embalagem mantém o café intacto</span>
            </Details>
            <Details>
              <img src={IconCoffe} alt="" />
              <span>O café chega fresquinho até você</span>
            </Details>
          </section>
        </DetailsContainer>
      </InfoContainer>
      <ImageContainer>
        <img src={IntroImage} alt="" />
      </ImageContainer>
    </IntroContainer>
  )
}
