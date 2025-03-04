import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import CustomButton from '../CustomButton';
import { Ionicons } from '@expo/vector-icons';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Invalid email format.', [{ text: 'OK' }]);
      return;
    }

    // Kiểm tra độ mạnh của mật khẩu (ít nhất 6 ký tự)
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long.', [{ text: 'OK' }]);
      return;
    }

    if (email && password && password === confirmPassword) {
      // Logic đăng ký thành công
      Alert.alert('Success', 'Account created successfully!', [{ text: 'OK' }]);
      navigation.navigate('SignIn');
    } else {
      Alert.alert('Error', 'Please fill in all fields and make sure passwords match.', [{ text: 'OK' }]);
    }
  };

  const handleGoogleSignUp = () => {
    // Logic đăng ký bằng Google
    Alert.alert('Google Sign Up', 'Google Sign Up logic here', [{ text: 'OK' }]);
  };

  const handleFacebookSignUp = () => {
    // Logic đăng ký bằng Facebook
    Alert.alert('Facebook Sign Up', 'Facebook Sign Up logic here', [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <CustomButton title="Sign Up" onPress={handleSignUp} />
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.signInLink}>Already have an account? <Text style={styles.signInLinkBold}>Sign In</Text></Text>
      </TouchableOpacity>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]} onPress={handleGoogleSignUp}>
          <Ionicons name="logo-google" size={24} color="white" />
          <Text style={styles.socialButtonText}>Sign Up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]} onPress={handleFacebookSignUp}>
          <Ionicons name="logo-facebook" size={24} color="white" />
          <Text style={styles.socialButtonText}>Sign Up with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  signInLink: {
    color: '#1e90ff',
    textAlign: 'center',
    marginTop: 20,
  },
  signInLinkBold: {
    fontWeight: 'bold',
  },
  socialButtonsContainer: {
    marginTop: 20,
    width: '100%',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: '#db4437',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  socialButtonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default SignUpScreen;