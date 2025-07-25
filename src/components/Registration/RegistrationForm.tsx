import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import InputFieldComponent from "../InputField/InputField";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../models/NavigationType";
import DatePickerComponent from "./DatePicker";
import GenderPicker from "../GenderPicker/GenderPicker";

const RegistrationForm = () => {
  const { navigate } = useNavigation<NavigationType>();

  const handleOnCreateOnePress = () => {
    navigate("LoginScreen");
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Hi there friend.</Text>
          <Text style={styles.titleText}>
            Wanna provide better life for your car?
          </Text>
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
          text="Driver Email"
          placeholder="Type Your Email"
        />
        <InputFieldComponent
          text="Driver Password"
          placeholder="Type Your Password"
        />
      </View>
      <View style={styles.dateAndGenderContainer}>
        <DatePickerComponent />
        <GenderPicker />
      </View>
      <View style={styles.dontHaveAnAccountContainer}>
        <Text style={styles.text}>Already have an account?</Text>
        <Pressable onPress={handleOnCreateOnePress}>
          <Text style={styles.ctaText}>Sign in!</Text>
        </Pressable>
      </View>

      <LinearGradient
        colors={["#3B2A7E", "#522E61"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>START A NEW JOURNEY</Text>
      </LinearGradient>
      <Text style={styles.text}>Sponsor: Onyx Premium Oil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
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
    display: "flex",
    rowGap: 20,
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
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: colors.textColor,
    fontSize: 24,
    fontFamily: "Teko-Regular",
  },

  // === DATE AND GENDER === //
  dateAndGenderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default RegistrationForm;
