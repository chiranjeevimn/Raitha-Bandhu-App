import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [mobNo, setMobNo] = useState('');
  const [place, setPlace] = useState('');
  const [wetLandAcre, setWetLandAcre] = useState('');
  const [wetLandSurveyNo, setWetLandSurveyNo] = useState('');
  const [dryLandDOOOODRI, setDryLandAcre] = useState('');
  const [dryLandForveyNo, setDryLandSurveyNo] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignUp = () => {
    // Handle sign up logic here
  };

  const handleLogIn = () => {
    // Handle log in logic here
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          
          placeholder="Mob. No"
          value={mobNo}
          onChangeText={text => setMobNo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Place"
          value={place}
          onChangeText={text => setPlace(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Wet Land (acre)"
          value={wetLandAcre}
          onChangeText={text => setWetLandAcre(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Wet Land Surnvey No"
          value={wetLandSurveyNo}
          onChangeText={text => setWetLandSurveyNo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Dry Land(Acre)"
          value={dryLandDOOOODRI}
          onChangeText={text => setDryLandAcre(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Dry Land Survey No"
          value={dryLandForveyNo}
          onChangeText={text => setDryLandSurveyNo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Aadhar No."
          value={aadharNo}
          onChangeText={text => setAadharNo(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <View style={styles.accountContainer}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity onPress={handleLogIn}>
            <Text style={styles.logInText}> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  accountText: {
    marginRight: 5,
  },
  logInText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default App;