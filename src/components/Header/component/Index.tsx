import { useState, useEffect } from 'react'
import { ButtonLocale } from './styles'
import { MapPin } from 'phosphor-react'

export function Location() {
  const [location, setLocation] = useState({ city: '', state: '' })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`,
        )
          .then((response) => response.json())
          .then((data) => {
            setLocation({
              city: data.city,
              state: data.principalSubdivisionCode,
            })
          })
      },
      (error) => console.log(error),
    )
  }, [])

  const state = location.state
  const stateCode = state.slice(-2)

  return (
    <>
      {location.city ? (
        <ButtonLocale>
          <MapPin weight="fill" />
          {location.city}/{stateCode}
        </ButtonLocale>
      ) : (
        <ButtonLocale>
          <MapPin weight="fill" />
          Carregando...
        </ButtonLocale>
      )}
    </>
  )
}
