import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,
  StyleSheet,
  Image,
} from 'react-native';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: require('../assets/shutterstock.png'),
      logo: require('../assets/axfoodLogo.png'),
    };
  }

  render() {
    return (
      <View style={style.container}>
        <ImageBackground source={this.state.image} style={style.image}>
          <View style={style.parentView}>
            <View style={style.topSection}>
              <View style={style.divider} />
              <View style={style.divider}>
                <Image source={this.state.logo} style={style.logoStyling} />
              </View>
            </View>
            <View style={style.midSection}>
              <View style={style.divider}>
                <TextInput
                  style={style.inputDetails}
                  placeholder={'Enter User Id'}
                />
              </View>
              <View style={{...style.divider}}>
                <TextInput
                  style={style.inputDetails}
                  placeholder={'Password'}
                />
              </View>
            </View>
            <View style={style.bottomSection}>
              <TouchableOpacity>
                <View style={style.loginButton}>
                  <Text style={style.loginText}>LOGIN</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={style.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>

              <View style={{...style.newUserSignUp}}>
                <View style={{flex: 1.15}}>
                  <Text style={style.newUserText}>New User?</Text>
                </View>

                <View style={style.divider}>
                  <TouchableOpacity>
                    <Text style={style.signUpText}> Signup</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const style = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  newUserText: {
    fontSize: 15,
    color: '#a19d9a',
    alignSelf: 'flex-end',
    fontWeight:'600'
  },
  forgotPassword: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#a19d9a',
    marginTop: 12,
    marginBottom: 20,
    fontWeight:'600'
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
  },
  divider: {flex: 1},

  inputDetails: {
    paddingVertical: 24,
    fontSize: 15,
    borderBottomColor: '#b5b3b1',
    borderBottomWidth: 1,
    marginLeft: 15,
    marginRight: 20,
    fontWeight:'600',
    color:"#a19d9a"
  },
  signUpText: {
    fontSize: 15,
    color: '#e06e26',
    fontWeight:'600'
  },
  midSection: {
    flex: 1,
  },
  newUserSignUp: {
    marginVertical: 10,

    flexDirection: 'row',
    marginVertical: 17,
    marginHorizontal: 15,
  },
  parentView: {
    margin: 20,
    flex: 1,
    marginVertical: 10,
  },
  bottomSection: {
    flex: 2,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 17,
  },

  loginButton: {
    borderRadius: 4,
    backgroundColor: '#e06e26',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
    marginLeft: 13,
    marginRight: 15,
  },
  logoStyling: {
    height: 35,
    resizeMode: 'contain',
    width: '35%',
    marginLeft: 15,
  },
});
export default Login;
