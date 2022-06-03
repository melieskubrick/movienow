import React from 'react'

import * as S from './styles'

interface ITag {
  title: string
}

const Tag = ({ title }: ITag) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}

export default Tag
