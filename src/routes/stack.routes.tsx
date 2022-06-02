import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

/* Screens */
import Welcome from '../screens/Welcome'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../theme'

const Stack = createStackNavigator()

const MyStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default MyStack
