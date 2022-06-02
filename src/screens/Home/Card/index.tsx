import React from 'react'

import { theme } from '../../../theme'
import * as S from './styles'

const Card = () => {
  return (
    <>
      <S.Gradient colors={['transparent', theme.colors.black]}>
        <S.Title>Sonic 2</S.Title>
        <S.Description>30 march 2022</S.Description>
      </S.Gradient>
      <S.Container source={require('../../../assets/images/sonic.jpeg')} />
    </>
  )
}

export default Card
