import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { theme } from '../../../theme'
import * as S from './styles'

interface ICard extends TouchableOpacityProps {
  title: string
  description: string
  uri: string
}

const Card = ({ title, description, uri, ...rest }: ICard) => {
  return (
    <S.Button {...rest}>
      <S.Gradient colors={['transparent', theme.colors.black]}>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Gradient>
      <S.Container source={{ uri }} />
    </S.Button>
  )
}

export default Card
