import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { colors } from "../styles/colors";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../models/NavigationType";

const SplashScreen = () => {
  const navigation = useNavigation<NavigationType>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("LoginScreen");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.rootContainer}>
      <FastImage
        source={require("../assets/images/splash.png")}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.background}
      />
      <View style={styles.logoWrapper}>
        <View style={styles.backgroundOpacity} />
        <FastImage
          source={require("../assets/images/logo.png")}
          resizeMode={FastImage.resizeMode.cover}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    position: "relative",
    display: "flex",
    flex: 1,
  },

  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },

  logoWrapper: {
    display: "flex",
    position: "relative",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 160,
  },

  backgroundOpacity: {
    position: "absolute",
    backgroundColor: colors.formBackground,
    width: "100%",
    height: "100%",
    opacity: 0.6,
  },

  logo: {
    position: "relative",
    height: 100,
    width: 300,
  },
});

export default SplashScreen;
