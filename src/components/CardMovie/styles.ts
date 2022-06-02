import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 0 8px;
`

export const Image = styled.Image`
  height: 160px;
  width: 120px;
  border-radius: 10px;
`

export const Title = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat_700Bold';
  color: ${({ theme }) => theme.colors.white};
  margin-top: 8px;
  width: 120px;
`

export const StarCount = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat_700Bold';
  color: ${({ theme }) => theme.colors.white};
  margin-left: 4px;
`

export const ContainerStar = styled.View`
  flex-direction: row;
  margin-top: 8px;
  align-items: center;
`
