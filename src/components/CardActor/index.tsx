import React from 'react'

import * as S from './styles'

interface ICardActor {
  name: string
  uri: string
}

const CardActor = ({ name, uri }: ICardActor) => {
  return (
    <S.Container>
      <S.Image source={{ uri }} />
      <S.Title numberOfLines={2}>{name}</S.Title>
    </S.Container>
  )
}

export default CardActor
