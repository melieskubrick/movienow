import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 0 4px;
`

export const Image = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
`

export const Title = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat_700Bold';
  color: ${({ theme }) => theme.colors.white};
  margin-top: 8px;
  width: 70px;
  text-align: center;
`
