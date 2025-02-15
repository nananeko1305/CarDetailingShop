import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackAuthNavigation from './src/navigation/StackAuthNavigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <NavigationContainer>
        <StackAuthNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    display: 'flex',
    flex: 1,
  },
});

export default App;

/* 

import {StyleSheet, Text, View} from 'react-native';

 const LoginScreen = () => {
   return (
     <View style={styles.rootContainer}>
       <Text>Hello Login Screen</Text>
     </View>
   );
 };
 const styles = StyleSheet.create({
   rootContainer: {
     display: 'flex',
     flex: 1,
   },
 });

 export default LoginScreen;

*/
