import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import MyStack from './stack.routes'
import { ThemeProvider } from 'styled-components/native'

import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

import { theme } from '../theme'
import AppLoading from 'expo-app-loading'
// import { Provider } from 'react-redux'
// import store from '#/store'

if (__DEV__) {
  import('../../reactotron')
}

function Routes() {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  })
  
  if (!fontsLoaded) return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default Routes
