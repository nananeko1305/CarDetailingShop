import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";

const SchedulesScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Hello SchedulesScreen</Text>
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

export default SchedulesScreen;
