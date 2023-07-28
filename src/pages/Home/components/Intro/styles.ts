import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 4rem;
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-family: 'Roboto';
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    margin-bottom: 4.125rem;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.875rem;
`

export const ImageContainer = styled.div`
  display: flex;
  padding-right: 4rem;
`
