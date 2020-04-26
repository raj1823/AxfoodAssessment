/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
import React from 'react';
import {
  Text,
  FlatList,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,

} from 'react-native';
import {connect} from 'react-redux';
import {isLoggedOut} from '../Services/Authentication/action'
import AsyncStorage from '@react-native-community/async-storage'
import {} from 'react-native-gesture-handler';
import ActivityWaiter from '../activityWaiter';

class Concept extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: require('../assets/leftArrow.png'),
      loader:false
    };
  }
  componentDidMount() {
    console.log('did mount called');
    try{
    AsyncStorage.setItem('token',this.props.token)
    }
    catch{
    console.log('Failed to save the data to the storage')
    }
    // AsyncStorage.getItem('token').then(value=>{
    //   var tokenAsync= value;
    //   console.log("token in async:",tokenAsync)
    // })
    
  }
  componentDidUpdate() {
    console.log('did update called');
  }
  logout=async()=> {
    this.props.logoutUser()
    AsyncStorage.clear();
    
    setTimeout(() => {
      this.setState({loader:false})
      this.props.navigation.navigate("Login")
      alert("You have been Logged Out Successfully")
    }, 1000);
   
   
    
  }
  openStore() {
    this.props.navigation.navigate('SearchStore');
  }

  render() {
    console.log('data inside render:', this.props.data);
    console.log("user Logged in?",this.props.isLoggedIn)
    return (
      this.state.loader? <ActivityWaiter/>:
      <SafeAreaView style={style.parentStyling}>
        <View style={{flexDirection:"row"}} >
        <View style={style.searchView}>
          <Image source={this.state.path} style={style.arrowStyling} />

          <Text style={style.headingStyle}>Concepts</Text>
          
        </View>
       
        <View style={style.logoutView}>
        <TouchableOpacity onPress={()=>{
          this.setState({loader:true})
          this.logout()
        }}>
          <Text style={style.logoutButton}>Logout</Text>
          </TouchableOpacity>
            </View>
            
            </View>


        <FlatList
          data={this.props.data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.openStore();
                }}>
                <View style={style.templateStyling}>
                  <Text style={style.ConceptStyling}>
                    Concept Name:{item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  templateStyling: {
    backgroundColor: '#fff',
    marginHorizontal: 2,
    marginVertical: 2,
  },
  headingStyle: {
    fontSize: 32,
    fontWeight: '600',
    
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 0.5},
    shadowColor: '#a8adaa',
    shadowOpacity: 0.5,
    flex:1,
    
  },
  arrowStyling: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    marginLeft: 10,
    marginVertical: 15,
    marginRight: 8,
    
  },
  logoutView:{
    flexDirection:"row",
    justifyContent:"flex-end",
    flex:0.5,
    backgroundColor:"#fff"
  },
  ConceptStyling: {
    fontSize: 16,
    fontWeight: '300',
    paddingVertical: 20,
    color: '#000',
    paddingLeft: 15,
  },
  parentStyling: {
    flex: 1,
  },
  logoutButton:{borderRadius:5,
    borderWidth:1,
    fontSize:16,
    fontWeight:"500",
    color:"#e06e26",
    paddingHorizontal:7,
    paddingVertical:5,
    marginVertical:20,
    marginHorizontal:10}
});
const mapStateToProps = state => ({
  data: state.authenticate_Reducer.conceptData,
  isLoggedIn: state.authenticate_Reducer.success,
  token:state.authenticate_Reducer.token
});

const mapDispatchToProps = {

  logoutUser: isLoggedOut
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Concept);
