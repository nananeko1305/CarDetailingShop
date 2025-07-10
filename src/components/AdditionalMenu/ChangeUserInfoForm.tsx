import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import InputFieldComponent from "../InputField";
import DatePickerComponent from "../Registration/DatePicker";
import GenderPicker from "../Registration/GenderPicker";
import LinearGradient from "react-native-linear-gradient";
import { useState } from "react";

const ChangeUserFormComponent = () => {
  const [isPasswordSectionVisible, setIsPasswordSectionVisible] =
    useState(false);

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.userInfoSection}>
        <View style={styles.userImage} />
        <View>
          <Text style={styles.text}>Driver Name</Text>
          <Text style={styles.text}>01/01/2025</Text>
        </View>
      </View>
      <View style={styles.inputFieldsSection}>
        <InputFieldComponent placeholder="Driver Name" text="Driver Name" />
        <InputFieldComponent placeholder="Driver Name" text="Driver Name" />
        <DatePickerComponent />
      </View>
      <Pressable
        onPress={() => setIsPasswordSectionVisible(!isPasswordSectionVisible)}
        style={styles.buttonWrapper}
      >
        <LinearGradient
          colors={["#3B2A7E", "#522E61"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>CHANGE YOUR PASSWORD</Text>
        </LinearGradient>
      </Pressable>
      {isPasswordSectionVisible && (
        <View style={styles.passwordSection}>
          <InputFieldComponent
            placeholder="Type Old Password"
            text="Old Password"
          />
          <InputFieldComponent
            placeholder="Type New Password"
            text="New Password"
          />
          <InputFieldComponent
            placeholder="Type Again New Password"
            text="Confirm New Password"
          />
        </View>
      )}
      <Pressable
        onPress={() => setIsPasswordSectionVisible(!isPasswordSectionVisible)}
        style={styles.confirmButtonWrapper}
      >
        <LinearGradient
          colors={["#3B2A7E", "#522E61"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.confirmButtonText}>CONFIRM CHANGES</Text>
        </LinearGradient>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    flex: 1,
    paddingHorizontal: 30,
    rowGap: 20,
    paddingTop: 80,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderWidth: 1,
    borderColor: colors.textColor,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: "Teko-Regular",
    fontSize: 24,
    color: colors.textColor,
  },
  userInfoSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingBottom: 20,
  },
  userImage: {
    height: 80,
    width: 80,
    backgroundColor: colors.textColor,
    borderRadius: 40,
  },
  text: {
    fontSize: 24,
    color: colors.textColor,
    fontFamily: "Teko-Regular",
  },
  passwordSection: {
    paddingTop: 20,
    rowGap: 20,
  },
  buttonWrapper: {
    marginTop: 30,
  },
  confirmButtonWrapper: {
    paddingTop: 30,
    paddingBottom: 100,
  },
  inputFieldsSection: {
    rowGap: 20,
  },
  confirmButtonText: {
    fontSize: 32,
    color: colors.textColor,
    fontFamily: "Teko-Regular",
  },
});

export default ChangeUserFormComponent;
