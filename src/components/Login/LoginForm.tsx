import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import InputFieldComponent from "./InputField";

const LoginForm = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Wanna fix you ride?</Text>
        <Text style={styles.titleText}>Jump In!</Text>
      </View>
      <View style={styles.inputFieldsContainer}>
        <InputFieldComponent text="Driver Name" placeholder="Type Your Name" />
        <InputFieldComponent
          text="Driver Password"
          placeholder="Type Your Password"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    marginHorizontal: 20,
    backgroundColor: colors.formBackground,
    opacity: 0.9,
    padding: 20,
    borderRadius: 20,
    rowGap: 20,
  },

  text: {
    color: colors.textColor,
    fontFamily: "Teko-Regular",
    fontSize: 20,
  },

  titleContainer: {
    display: "flex",
  },

  titleText: {
    fontFamily: "Teko-Regular",
    fontSize: 32,
    color: colors.textColor,
    lineHeight: 32,
  },

  inputFieldsContainer: {
    display: "flex",
  },
});

export default LoginForm;
