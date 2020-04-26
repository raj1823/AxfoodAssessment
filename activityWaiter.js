import React from 'react'
import {ActivityIndicator, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

class ActivityWaiter extends React.Component{

    render(){
        return(
            <SafeAreaView style={{flex:1}}>
            <ActivityIndicator style={style.indicatorstyling}
                                size="large" color="#e06e26"/>
            </SafeAreaView>
        )
    }
}
const style= StyleSheet.create({

    indicatorstyling: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
      },
})
export default ActivityWaiter