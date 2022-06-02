import React from 'react'
import { Text } from 'react-native'

import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading'

import * as S from './styles'
import Button from '../../components/Button'

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
      <Button title="Começar" />
    </S.Container>
  )
}

export default Welcome
