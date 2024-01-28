import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import SignUpForm from './SignUpForm'; // Adjust the path based on your project structure

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is a new web page</Text>
      <SignUpForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cff5c9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
