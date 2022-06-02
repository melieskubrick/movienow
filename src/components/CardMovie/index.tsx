import Feather from '@expo/vector-icons/Feather'
import React from 'react'

import { theme } from '../../theme'
import * as S from './styles'

const CardMovie = () => {
  return (
    <S.Container>
      <S.Image source={require('../../assets/images/sonic.jpeg')} />
      <S.Title numberOfLines={2}>Um Sonho de Liberdade</S.Title>
      <S.ContainerStar>
        <Feather name="star" size={20} color={theme.colors.white} />
        <S.StarCount>8.7</S.StarCount>
      </S.ContainerStar>
    </S.Container>
  )
}

export default CardMovie
