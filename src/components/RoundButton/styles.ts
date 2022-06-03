import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`
