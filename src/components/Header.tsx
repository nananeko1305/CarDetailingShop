import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";
import FastImage from "react-native-fast-image";

const HeaderComponent = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.leftSection}>
        <View style={styles.userImage} />
        <View style={styles.leftSectionText}>
          <Text style={styles.text}>Hi there, Driver.</Text>
          <Text style={styles.text}>Nice to see you again!</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <FastImage
          source={require("../assets/images/logo.png")}
          resizeMode={FastImage.resizeMode.center}
          style={styles.logoIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.bg_0E0E28,
    height: 100,
    paddingHorizontal: 30,
  },
  leftSection: {
    display: "flex",
    flexDirection: "row",
    flex: 2,
    alignItems: "center",
    columnGap: 10,
  },
  leftSectionText: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
  },
  rightSection: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  text: {
    color: colors.textColor,
    fontSize: 22,
    fontFamily: "Teko-Regular",
    lineHeight: 22,
  },
  logoIcon: {
    height: 40,
    width: 80,
  },
  userImage: {
    height: 60,
    width: 60,
    backgroundColor: colors.textColor,
    borderRadius: 30,
  },
});

export default HeaderComponent;
