import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import HeaderComponent from "../components/Header";
import DetailingAppointmentComponent from "../components/Appointmets/DetailingAppointment/DetailingAppointments";

const DetailingScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <FastImage
        source={require("../assets/images/home.png")}
        style={styles.backgroundImage}
        resizeMode={FastImage.resizeMode.cover}
      />
      <HeaderComponent />
      <DetailingAppointmentComponent />
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

export default DetailingScreen;
