import React, { useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackAuthNavigation from "./src/navigation/StackAuthNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "./src/styles/colors";
import changeNavigationBarColor from "react-native-navigation-bar-color";

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  useEffect(() => {
    changeNavigationBarColor(colors.bg_0E0E28, true);
  }, []);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar backgroundColor={colors.bg_0E0E28} />
      <NavigationContainer>
        <StackAuthNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
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
