import { StyleSheet, View } from "react-native";
import HeaderComponent from "../components/Header";
import FastImage from "react-native-fast-image";
import YourGarageComponent from "../components/YourGarage/YourGarage";
import CareSelection from "../components/CareSelection/CareSelection";

const HomeScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <FastImage
        source={require("../assets/images/home.png")}
        style={styles.backgroundImage}
        resizeMode={FastImage.resizeMode.cover}
      />
      <HeaderComponent />
      <YourGarageComponent />
      <CareSelection />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    position: "relative",
    display: "flex",
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
    flex: 1,
  },
});

export default HomeScreen;
