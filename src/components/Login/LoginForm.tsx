import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import InputFieldComponent from "../InputField/InputField";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../models/NavigationType";
import { normalize } from "../../utils";

const LoginForm = () => {
  const { navigate } = useNavigation<NavigationType>();

  const handleOnCreateOnePress = () => {
    navigate("RegistrationScreen");
  };

  const handleOnLogin = () => {
    navigate("Home");
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Wanna fix you ride?</Text>
          <Text style={styles.titleText}>Jump In!</Text>
        </View>
        <View style={styles.logoContainer}>
          <FastImage
            source={require("../../assets/images/logo.png")}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.logo}
          />
        </View>
      </View>
      <View style={styles.inputFieldsContainer}>
        <InputFieldComponent text="Driver Name" placeholder="Type Your Name" />
        <InputFieldComponent
          text="Driver Password"
          placeholder="Type Your Password"
        />
      </View>
      <View style={styles.dontHaveAnAccountContainer}>
        <Text style={styles.text}>Don't have an account?</Text>
        <Pressable onPress={handleOnCreateOnePress}>
          <Text style={styles.ctaText}>Create one!</Text>
        </Pressable>
      </View>
      <Pressable onPress={handleOnLogin}>
        <LinearGradient
          colors={["#3B2A7E", "#522E61"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <View style={styles.leftContainer}>
            <Text style={styles.buttonText}>GO TO GARAGE</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.buttonText}>3-2-1-GO!</Text>
            <FastImage
              source={require("../../assets/icons/LoginScreen/ArrowRight.png")}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.icon}
            />
          </View>
        </LinearGradient>
      </Pressable>
      <Text style={styles.text}>Sponsor: Onyx Premium Oil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: 20,
    backgroundColor: colors.formBackground,
    opacity: 0.95,
    padding: 20,
    borderRadius: 20,
    rowGap: 20,
  },

  topContainer: {
    display: "flex",
    flexDirection: "row",
  },

  logoContainer: {
    display: "flex",
    flex: 1,
  },

  logo: {
    height: 35,
  },

  text: {
    color: colors.textColor,
    fontFamily: "Teko-Regular",
    fontSize: 20,
  },

  titleContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 2,
  },

  titleText: {
    fontFamily: "Teko-Regular",
    fontSize: 32,
    color: colors.textColor,
    lineHeight: 32,
  },

  inputFieldsContainer: {
    rowGap: 20,
    height: normalize(150),
  },

  // === DONT HAVE AN ACCOUNT STYLES === //
  dontHaveAnAccountContainer: {
    display: "flex",
    flexDirection: "column",
  },

  ctaText: {
    color: colors.purpleText,
    fontFamily: "Teko-Regular",
    fontSize: 20,
    textDecorationLine: "underline",
    lineHeight: 20,
  },

  // === MAIN BUTTON ==== //

  button: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.textColor,
  },

  leftContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  rightContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 5,
  },

  icon: {
    width: 16,
    height: 16,
  },

  buttonText: {
    color: colors.textColor,
    fontSize: 24,
    fontFamily: "Teko-Regular",
  },
});

export default LoginForm;
