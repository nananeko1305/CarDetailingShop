import { ImageBackground, StyleSheet, Text, View } from "react-native";
import LoginForm from "../components/Login/LoginForm";

const LoginScreen = () => {
  return (
    <View style={styles.rootContainer}>
      {/* CHANGE TO FAST IMAGE */}
      <ImageBackground
        source={require("../assets/images/login.png")}
        style={styles.imageBackground}
      >
        <LoginForm />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    flex: 1,
  },
  imageBackground: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
});

export default LoginScreen;
