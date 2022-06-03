import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import { theme } from '../theme'
import MyStack from './stack.routes'

// import { Provider } from 'react-redux'
// import store from '#/store'

function Routes() {
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  })

  if (!fontsLoaded) return <></>

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default Routes
