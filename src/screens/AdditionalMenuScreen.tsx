import { StyleSheet, Text, View } from "react-native";

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
  },
});

export default AdditionalMenuScreen;
