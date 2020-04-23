import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './Components/login';
import { NavigationContainer } from '@react-navigation/native';

const Stack= createStackNavigator();

function myApp(){
return(
    <NavigationContainer  >
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} /> 


    </Stack.Navigator>
    </NavigationContainer>
)
}

export default myApp;