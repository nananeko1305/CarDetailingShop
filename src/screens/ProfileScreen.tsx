import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";
import ChangeUserFormComponent from "../components/AdditionalMenu/ChangeUserInfoForm/ChangeUserInfoForm";

const ProfileScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <ChangeUserFormComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.bottomBarBackground,
  },
});

export default ProfileScreen;
