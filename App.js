import React from 'react';
import {Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Mission from './screens/Mission';

const Stack = createStackNavigator();

export default class App extends React.Component{
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options = {{
            headerTransparent:true,
            headerLeft : () => (
              <Image source={require('./assets/drawericon.png')} style={{height: 70, width:70,marginHorizontal:10}}/>
            ),
            title: '',
            headerRight : () => (
              <Image source={require('./assets/namjoon.jpeg')} style={{marginHorizontal:30, marginTop:50,height: 70, width:70, borderRadius:40}}/>
            )
            }}/>
            <Stack.Screen name="Mission" component={Mission} options = {{
            headerTransparent:true,
            headerLeft : () => (
              <Image source={require('./assets/blackmenu.png')} style={{height: 30, width:30,marginHorizontal:35, marginTop:20}}/>
            ),
            title: '',
            headerRight : () => (
              <Image source={require('./assets/namjoon.jpeg')} style={{marginHorizontal:30, marginTop:50,height: 70, width:70, borderRadius:40}}/>
            )
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}