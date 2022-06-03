import React from 'react'
import { ActivityIndicator, Modal } from 'react-native'

import { theme } from '../../theme'
import { Container, ModalContent, BackgroundModal } from './styles'

const Loading = () => {
  return (
    <Container>
      <Modal transparent={true} animationType="fade" visible>
        <ModalContent>
          <BackgroundModal>
            {/* <Lottie source={require('../../assets/json/loading.json')} autoPlay loop /> */}
            <ActivityIndicator size={'large'} color={theme.colors.white} />
          </BackgroundModal>
        </ModalContent>
      </Modal>
    </Container>
  )
}

export default Loading
