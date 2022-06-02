import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

interface IButton extends TouchableOpacityProps {
  title: string
  color: string
}

const Button = ({ title, color, ...rest }: IButton) => {
  return (
    <S.Container color={color} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}

export default Button
