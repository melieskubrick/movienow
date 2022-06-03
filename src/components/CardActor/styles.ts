import ImageProgress from 'react-native-image-progress'
import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 0 4px;
`

export const Image = styled(ImageProgress).attrs({ borderRadius: 32 })`
  height: 64px;
  width: 64px;
`

export const Title = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat_700Bold';
  color: ${({ theme }) => theme.colors.white};
  margin-top: 8px;
  width: 70px;
  text-align: center;
`
