import styled from 'styled-components'
export const HomeContainer = styled.div`
  width: 100%;
`

export const TitleGrid = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 800;
  line-height: 1.3;
  font-size: 2rem;
  padding-left: 5rem;
`

export const GridCoffeList = styled.div`
  display: grid;
  grid-template-areas:
    'card card card card'
    'card card card card'
    'card card card card'
    'card card card card';
  gap: 2.5rem;
  width: calc(100% - 8rem);
  padding: 4rem;
`
