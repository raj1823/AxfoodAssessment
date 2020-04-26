import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './Components/login';
import { NavigationContainer } from '@react-navigation/native';
import Concept from './Components/concept'
import SearchStore from './Components/searchStore'
import ProductDetails from './Components/productDetails'
import AsyncStorage from '@react-native-community/async-storage';

const Stack= createStackNavigator();

function myApp(){
        var token=null;
     AsyncStorage.getItem('token').then(value=>{

         token = value;
        console.log("router:",value)
    })

    
return(

    <NavigationContainer  >
    

        { token!=null? 
        <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Concept" component={Concept}/>
        <Stack.Screen options={{headerShown: false}} name="SearchStore" component ={SearchStore} />
        <Stack.Screen options={{headerShown:false}} name="ProductDetails" component={ProductDetails}/>
        </Stack.Navigator>
        :
        <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
        <Stack.Screen options={{headerShown:false}} name="Concept" component={Concept}/>
        <Stack.Screen options={{headerShown: false}} name="SearchStore" component ={SearchStore} />
        <Stack.Screen options={{headerShown:false}} name="ProductDetails" component={ProductDetails}/>
         
        </Stack.Navigator> }
    
    </NavigationContainer>
)
}

export default myApp;