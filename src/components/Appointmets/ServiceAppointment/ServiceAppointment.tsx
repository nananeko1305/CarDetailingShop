import { Text, View } from "react-native";
import { getStyles } from "./ServiceAppointment.styles";
import LinearGradient from "react-native-linear-gradient";

const ServiceAppointment = () => {
  const styles = getStyles();

  return (
    <LinearGradient
      colors={["#3B2A7E", "#522E61"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.rootView}
    >
      <Text style={styles.scheduleText}>Schedule An Appointment</Text>

      <View style={styles.sectionView}>
        <View style={styles.topSectionView}></View>
        <View></View>
      </View>
    </LinearGradient>
  );
};

export default ServiceAppointment;
