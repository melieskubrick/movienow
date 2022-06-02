import React from 'react'

import * as S from './styles'

const CardActor = () => {
  return (
    <S.Container>
      <S.Image source={require('../../assets/images/sonic.jpeg')} />
      <S.Title numberOfLines={2}>Teste Teste</S.Title>
    </S.Container>
  )
}

export default CardActor
