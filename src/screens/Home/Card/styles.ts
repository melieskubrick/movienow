import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions } from 'react-native'
import ImageProgress from 'react-native-image-progress'
import styled from 'styled-components/native'

export const Container = styled(ImageProgress).attrs({
  borderRadius: 20
})`
  height: 160px;
  width: ${Dimensions.get('window').width - 80}px;
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
