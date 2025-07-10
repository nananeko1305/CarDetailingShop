import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";

const UserInfoComponent = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.image} />
      <View style={styles.textSection}>
        <Text style={styles.text}>Driver Name</Text>
        <Text style={styles.text}>Cars: 4</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    alignItems: "center",
    rowGap: 10,
    paddingVertical: 30,
  },
  image: {
    height: 80,
    width: 80,
    backgroundColor: "gray",
    borderRadius: 40,
  },
  textSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    fontSize: 26,
    fontFamily: "Teko-Regular",
    color: colors.textColor,
    lineHeight: 26,
  },
});

export default UserInfoComponent;
