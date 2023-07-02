import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import HeaderImage from '../../common/HeaderImage';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    alignSelf: 'center',
    width: 275,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  circleContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  circleImage: {
    width: 100,
    height: 100,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    marginBottom: 12,
    padding: 15,
    borderColor: '#535353',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#D1D1D1',
    color: '#333333',
  },
  forgotPassword: {
    marginVertical: 12,
    color: '#000',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 1,
    width: '100%',
    justifyContent: 'center',
    marginVertical: 15,
  },
  googleIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#000',
    fontSize: 16,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#888',
  },
  separatorText: {
    paddingHorizontal: 10,
    color: '#888',
    fontWeight: 'bold',
  },
  createAccountButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#F6B816',
    width: '100%',
  },
  createAccountButtonText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default LoginScreen;
