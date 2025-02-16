import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import RegistrationForm from "../components/Registration/RegistrationForm";

const ReistrationScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <FastImage
        source={require("../assets/images/registration.png")}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.backgroundImage}
      />
      <RegistrationForm />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flex: 1,
  },

  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default ReistrationScreen;
