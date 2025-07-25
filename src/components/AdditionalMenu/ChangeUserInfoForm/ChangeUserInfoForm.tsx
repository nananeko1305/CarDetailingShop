import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../styles/colors";
import InputFieldComponent from "../../InputField/InputField";
import DatePickerComponent from "../../Registration/DatePicker";
import GenderPicker from "../../GenderPicker/GenderPicker";
import LinearGradient from "react-native-linear-gradient";
import { useState } from "react";
import { getStyles } from "./ChangeUserInfoForm.styles";

const ChangeUserFormComponent = () => {
  const [isPasswordSectionVisible, setIsPasswordSectionVisible] =
    useState(false);

  const styles = getStyles();

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
        <InputFieldComponent placeholder="Driver Email" text="Driver Email" />
        <View style={styles.pickersSection}>
          <DatePickerComponent />
          <GenderPicker />
        </View>
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
        onPress={() => setIsPasswordSectionVisible(false)}
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

export default ChangeUserFormComponent;
