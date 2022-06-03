import Feather from '@expo/vector-icons/Feather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

/* Screens */
import Home from '../screens/Home'
import Welcome from '../screens/Welcome'
import { theme } from '../theme'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const tabBarLabelStyle = {
  fontFamily: theme.typography.bold,
  fontSize: 12,
  marginBottom: 4
}

const tabBarStyle = {
  backgroundColor: theme.colors.primary,
  borderTopColor: theme.colors.primary
}

const navConfig = {
  headerStyle: {
    backgroundColor: theme.colors.primary,
    borderBottomWidth: 0,
    shadowOpacity: 0
  },
  headerTintColor: theme.colors.white,
  headerTitleStyle: {
    fontFamily: 'Montserrat_600SemiBold'
  },
  headerLeftContainerStyle: {
    paddingLeft: 24
  },
  headerRightContainerStyle: {
    paddingRight: 24
  }
}

const optionsTab = (icon: any, title: string) => ({
  tabBarIcon: (props: any) => <Feather name={icon} size={24} color={props.color} />,
  tabBarActiveTintColor: theme.colors.secondary,
  tabBarInactiveTintColor: theme.colors.gray,
  title,
  tabBarLabelStyle,
  tabBarStyle,
  ...navConfig
})

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} options={optionsTab('home', 'Home')} />
    <Tab.Screen name="Search" component={Home} options={optionsTab('search', 'Pesquisa')} />
    <Tab.Screen name="Evaluation" component={Home} options={optionsTab('heart', 'Avaliações')} />
  </Tab.Navigator>
)

const MyStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default MyStack
