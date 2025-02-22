import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";

const CarsScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Hello Cars Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.bottomBarBackground,
    paddingHorizontal: 40,
  },
});

export default CarsScreen;
