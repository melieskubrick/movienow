import React from 'react'

import Button from '../../components/Button'
import { theme } from '../../theme'
import * as S from './styles'

const Welcome = () => {
  return (
    <S.Container>
      <S.Illustration source={require('../../assets/images/illustration.png')} />
      <S.TextView>
        <S.Title>Seja bem vindo(a)</S.Title>
        <S.Description>
          O Movie Now é um classificador de filmes e séries das maiores plataformas de entrenimento
        </S.Description>
      </S.TextView>
      <Button title="Começar" color={theme.colors.secondary} />
    </S.Container>
  )
}

export default Welcome
