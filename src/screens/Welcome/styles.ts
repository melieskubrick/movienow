import { getStatusBarHeight } from 'react-native-status-bar-height'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${getStatusBarHeight()}px 32px;
  align-items: center;
  justify-content: center;
`

export const Illustration = styled.Image``

export const TextView = styled.View`
  margin: 40px 0;
`

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Montserrat_700Bold';
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  text-align: center;
`

export const Description = styled.Text`
  font-size: 18px;
  font-family: 'Montserrat_400Regular';
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-top: 16px;
`
