import React from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductDetails: this.props.route.params.item,
      path: require('../assets/leftArrow.png'),
      quantity: 0,
      price: 0,
    };
  }

  render() {
    const {ProductDetails} = this.state;
    console.log('Product Details:', ProductDetails);
    console.log('props :', this.props);

    if (ProductDetails.price) this.setState({price: ProductDetails.price});
    if (ProductDetails.volume) this.setState({quantity: ProductDetails.volume});
    return (
      <SafeAreaView style={style.parentStyle}>
        <View style={style.parentProductView}>
          <View style={style.searchView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('SearchStore');
              }}>
              <Image source={this.state.path} style={style.arrowStyling} />
            </TouchableOpacity>
            <View>
              <Text style={style.headingStyle}> Product Details</Text>
            </View>
          </View>

          <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
            <Text style={style.productNameStyling}>
              {ProductDetails.productName}
            </Text>
            <Text style={style.productBarcodeStyling}>
              {ProductDetails.barcodeId}
            </Text>
          </View>
          <View style={{paddingHorizontal: 20}}>
            <Text style={style.midText}>Last Scanned Details</Text>
            <View style={style.parentProductMidView}>
              <View
                style={{marginLeft: 15, marginVertical: 20, marginRight: 20}}>
                <View style={style.productMidView}>
                  <Text style={style.productText}>Quantity</Text>
                  <Text style={style.productText}>{this.state.quantity}Kg</Text>
                </View>

                <TextInput style={style.horizontalRule} />

                <View style={style.productMidView2}>
                  <Text style={style.productText}>Price</Text>
                  <Text style={style.productText}>${this.state.price}</Text>
                </View>
              </View>
            </View>
            <View style={style.infoView}>
              <Text style={style.prodInfo}>Product Information</Text>

              <Text style={style.saveButton}>SAVE</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  arrowStyling: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    marginLeft: 10,
    marginVertical: 15,
    marginRight: 8,
  },
  productText: {
    fontSize: 16,
    color: '#848a86',
  },
  parentProductMidView: {
    marginTop: 8,
    backgroundColor: '#f0ebeb',
    marginHorizontal: 15,
    borderRadius: 7,
    marginBottom: 20,
  },
  saveButton: {
    marginVertical: 15,
    color: '#e06e26',
    fontSize: 14,
    fontWeight: '500',
  },
  prodInfo: {
    marginVertical: 15,
    color: '#848a86',
    fontSize: 16,
    fontWeight: '500',
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 15,
  },
  productMidView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  productMidView2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },

  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  parentProductView: {
    flex: 1,
  },
  midText: {
    fontSize: 15,
    paddingHorizontal: 15,
    marginTop: 5,
    color: '#848a86',
  },
  horizontalRule: {
    borderBottomColor: '#d9d4d4',
    borderBottomWidth: 1,
    height: 1,
  },

  productBarcodeStyling: {
    fontSize: 18,
    paddingHorizontal: 18,
    paddingVertical: 8,

    color: '#848a86',
  },

  productNameStyling: {
    fontSize: 32,
    paddingHorizontal: 15,
  },
  headingStyle: {
    fontSize: 32,
    fontWeight: '600',
  },
  parentStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetails);
