import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-family: 'Montserrat_600SemiBold';
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`
