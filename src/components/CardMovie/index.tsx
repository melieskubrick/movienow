import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { theme } from '../../theme'
import * as S from './styles'

interface ICardMovie extends TouchableOpacityProps {
  title: string
  rate: string
  uri: string
}

const CardMovie = ({ title, rate, uri, ...rest }: ICardMovie) => {
  return (
    <S.Container {...rest}>
      <S.Image source={{ uri }} />
      <S.Title numberOfLines={2}>{title}</S.Title>
      <S.ContainerStar>
        <Feather name="star" size={20} color={theme.colors.white} />
        <S.StarCount>{rate}</S.StarCount>
      </S.ContainerStar>
    </S.Container>
  )
}

export default CardMovie
