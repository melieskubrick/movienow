import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'Montserrat_700Bold';
  color: ${({ theme }) => theme.colors.white};
`
