import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenu from './menu/MainMenu'
import Materi from './menu/Materi'
import Video from './menu/Video'

const Stack = createNativeStackNavigator();
const App = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
      name="Materi" 
      component={Materi} 
      options={{
        headerStyle: {
          backgroundColor: '#F27141'
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
      />
  
    <Stack.Screen 
      name="Video" 
      component={Video} 
      options={{
        headerStyle: {
          backgroundColor: '#F27141'
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
  

 
}

export default App;
