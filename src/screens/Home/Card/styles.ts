import { Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled.Image`
  height: 160px;
  width: ${Dimensions.get('window').width - 80}px;
  border-radius: 20px;
  z-index: 0;
  position: absolute;
`

export const Gradient = styled(LinearGradient)`
  height: 160px;
  z-index: 999;
  border-radius: 20px;
  justify-content: flex-end;
  padding: 16px;
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: 'Montserrat_700Bold';
  color: ${({ theme }) => theme.colors.white};
`

export const Description = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat_400Regular';
  color: ${({ theme }) => theme.colors.white};
`
