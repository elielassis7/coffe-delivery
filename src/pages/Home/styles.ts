import styled from 'styled-components'
export const HomeContainer = styled.div`
  display: flex;
  width: 1440px;
  height: 2293px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const TitleContainer = styled.div`
  color: ${(props) => props.theme['base-title']};
  font-family: 'Baloo 2', sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
`
