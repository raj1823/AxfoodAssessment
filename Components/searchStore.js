import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';
import {
  loadStores,
  loadSearchStores,
} from '../Services/Authentication/authenticator';
import ActivityWaiter from '../activityWaiter';

class SearchStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: require('../assets/leftArrow.png'),
      isLoading: true,
      searchQuery: '',
      toggle: true,
    };
  }

  componentDidMount() {
    console.log('inside mount ');
    this.props.loadStoreDetails(this.props.token).then(
      resolve => {
        if (resolve === 'Success') {
          this.setState({isLoading: false});
        }
      },
      reject => {
        if (reject === 500) {
          alert('Fetch Error');
          this.setState({isLoading: false});
          this.props.navigation.navigate("Concept")
        } else {
          alert('Server Error');
          this.setState({isLoading: false});
        }
      },
    );
  }
  componentDidUpdate() {
    console.log('UPDATE CALLED');
  }
  displaySearchData() {
    let length = this.state.searchQuery.length;
    if (length) {
      this.setState({isLoading: true});
      this.props
        .loadSearchStoreDetails(this.props.token, this.state.searchQuery)
        .then(
          resolve => {
            if (resolve === 'Success') {
              this.setState({isLoading: false});
            }
          },
          reject => {
            if (reject === 403) {
              alert('Fetch Error');
              this.setState({isLoading: false});
              this.setState({toggle: false});
            } else {
              alert('Server Error');
              this.setState({isLoading: false});
              this.setState({toggle: false});
            }
          },
        );
    } else {
      this.setState({toggle: true});
    }
  }
  showProductDetails(item) {
    this.props.navigation.navigate('ProductDetails', {item: item});
  }

  render() {
    console.log('store data inside render:', this.props.storeData);
    console.log('isLoading: ', this.state.isLoading);
    return this.state.toggle ? (
      this.state.isLoading ? (
        <ActivityWaiter />
      ) : (
        <SafeAreaView style={{flex: 1}}>
          <View style={style.searchView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Concept');
              }}>
              <Image source={this.state.path} style={style.arrowStyling} />
            </TouchableOpacity>
            <TextInput
              placeholder={'Search'}
              style={style.searchStyle}
              onChangeText={text => {
                this.setState({searchQuery: text});
                this.setState({toggle: false});
                this.displaySearchData();
              }}
            />
          </View>
          <View >      
          <FlatList
            data={this.props.storeData}
            renderItem={({item}) => {
              return (
                <View style={style.templateStyling}>
                  <Text style={style.ConceptStyling}>{item.storeName}</Text>
                  <Text style={style.storeAddressView}>
                      {item.storeAddress} , {item.city}{' '}
                    </Text>
                </View>
              );
            }}
          />
          </View>
        </SafeAreaView>
      )
    ) : (
      <SafeAreaView style={{flex: 1}}>
        <View style={style.searchView}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Concept');
            }}>
            <Image source={this.state.path} style={style.arrowStyling} />
          </TouchableOpacity>
          <TextInput
            placeholder={'Search'}
            style={style.searchStyle}
            onChangeText={text => {
              this.setState({searchQuery: text});
              this.setState({toggle: false});
              this.displaySearchData();
            }}
          />
        </View>
           
        <FlatList
          data={this.props.searchedData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.showProductDetails(item);
                }}>
                <View style={style.prodNameStyling}>
                  <Text style={style.prodNameTextStyling}>{item.productName}</Text>
                 
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
  searchStyle: {
    fontSize: 18,
    padding: 10,
    
  },
  arrowStyling: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginLeft: 10,
    marginVertical: 15,
    marginRight: 8,
   
  },
  storeAddressView: {
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 20,
    marginTop: 10,
  },
  templateStyling: {
    backgroundColor:"#fff",
      height: 115,
      marginHorizontal: 5,
      marginVertical:5,
       shadowOpacity:0.5,  
      shadowColor: '#706d6d',
      shadowOffset: {
        width: 0,
        height: 8,
      },
  },
  prodNameStyling:{
    backgroundColor: '#fff',
    marginHorizontal: 2,
    marginVertical: 2,
  },
  ConceptStyling: {
    
    fontSize: 18,
    marginLeft: 20,
    marginTop: 15,
    fontWeight: 'bold',
  
  },
prodNameTextStyling:{ 
  fontSize: 16,
  fontWeight: '300',
  paddingVertical: 20,
  color: '#000',
  paddingLeft: 15,
},
  searchView: {
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 0.5},
    shadowColor: '#a8adaa',
    shadowOpacity: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    
  },
});

const mapStateToProps = state => ({
  token: state.authenticate_Reducer.token,
  storeData: state.authenticate_Reducer.storeData,
  searchedData: state.authenticate_Reducer.storeSearchData,
});

const mapDispatchToProps = {
  loadStoreDetails: loadStores,
  loadSearchStoreDetails: loadSearchStores,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchStore);
