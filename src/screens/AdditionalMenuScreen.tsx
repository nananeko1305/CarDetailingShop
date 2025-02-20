import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";

const AdditionalMenuScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Hello Login Screen</Text>
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

export default AdditionalMenuScreen;
