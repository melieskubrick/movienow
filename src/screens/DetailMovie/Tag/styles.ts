import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 8px 16px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 4px;
`

export const Title = styled.Text`
  font-size: 10px;
  font-family: 'Montserrat_600SemiBold';
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`
