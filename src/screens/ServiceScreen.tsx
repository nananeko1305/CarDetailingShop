import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import HeaderComponent from "../components/Header";
import ServiceAppointment from "../components/Appointmets/ServiceAppointment/ServiceAppointment";

const ServiceScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <FastImage
        source={require("../assets/images/home.png")}
        style={styles.backgroundImage}
        resizeMode={FastImage.resizeMode.cover}
      />
      <HeaderComponent />
      <ServiceAppointment />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
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

export default ServiceScreen;
