
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import SplashScreen from './Components/Splashscreen';
import { AuthStack } from './Components/Stacks/AuthStack';



function App(): React.JSX.Element {

  return (
    <>
      <AuthStack/>
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
