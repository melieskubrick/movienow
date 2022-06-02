import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

/* Screens */
import Home from '../screens/Home'
import Welcome from '../screens/Welcome'
import { theme } from '../theme'

const Stack = createStackNavigator()

const defaultHeaderStyle = {
  backgroundColor: theme.colors.primary,
  shadowColor: 'transparent'
}
const defaultHeaderTitleStyle = { color: theme.colors.white, fontFamily: 'Montserrat_400Regular' }

const MyStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: defaultHeaderStyle,
          headerTitleStyle: defaultHeaderTitleStyle,
          title: 'Movie Now'
        }}
      />
    </Stack.Navigator>
  )
}

export default MyStack
