import { StyleSheet, Text, View } from "react-native";

const DetailingScreen = () => {
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

export default DetailingScreen;
