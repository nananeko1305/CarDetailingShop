import { StyleSheet, Text, View } from "react-native";

const ServiceScreen = () => {
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

export default ServiceScreen;
