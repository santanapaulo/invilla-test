import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#370459"></StatusBar>
      <Routes />
    </>
  );
};

export default App;
