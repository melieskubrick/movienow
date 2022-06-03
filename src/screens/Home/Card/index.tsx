import React from 'react'

import { theme } from '../../../theme'
import * as S from './styles'

interface ICard {
  title: string
  description: string
  uri: string
}

const Card = ({ title, description, uri }: ICard) => {
  return (
    <>
      <S.Gradient colors={['transparent', theme.colors.black]}>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Gradient>
      <S.Container source={{ uri }} />
    </>
  )
}

export default Card
