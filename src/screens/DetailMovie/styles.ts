import ParallaxScroll from '@monterosa/react-native-parallax-scroll'
import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Parallax = styled(ParallaxScroll)``

export const Image = styled.Image`
  height: ${Dimensions.get('window').height / 2}px;
  width: ${Dimensions.get('window').width}px;
  z-index: 0;
  position: absolute;
`

export const Gradient = styled(LinearGradient)`
  height: ${Dimensions.get('window').height / 2}px;
  z-index: 999;
  justify-content: flex-end;
  padding: 16px;
`

export const ContainerMovieCover = styled.View`
  height: ${Dimensions.get('window').height / 2}px;
  justify-content: flex-end;
  padding: 24px;
  z-index: -1;
`

export const ContainerHeader = styled.View`
  padding: ${getStatusBarHeight()}px 16px;
`

export const ContainerInformations = styled.View`
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.background};
  top: -16px;
`

export const Description = styled.Text`
  margin: 0 24px;
  font-size: 14px;
  font-family: 'Montserrat_300Light';
  color: ${({ theme }) => theme.colors.white};
`
