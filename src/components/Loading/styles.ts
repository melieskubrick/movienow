import styled from 'styled-components/native'

import { theme } from '../../theme'

export const Container = styled.View`
  flex: 1;
`

export const ModalContent = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const BackgroundModal = styled.View`
  background-color: ${theme.colors.primary};
  border-radius: 10px;
  height: 130px;
  width: 130px;
  align-items: center;
  justify-content: center;
`
