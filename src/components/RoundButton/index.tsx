import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

interface IRoundButton extends TouchableOpacityProps {}

const RoundButton: React.FC = ({ children, ...rest }: IRoundButton) => {
  return <S.Container {...rest}>{children}</S.Container>
}

export default RoundButton
