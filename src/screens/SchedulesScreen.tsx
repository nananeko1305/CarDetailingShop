import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";
import BackButton from "../components/BackButton/BackButton";
import { normalize, normalizeFont } from "../utils";
import SchedulesList from "../components/Schedules/SchedulesList/SchedulesList";

const SchedulesScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <BackButton />
      <Text style={styles.titleText}>See All Your Appointments</Text>
      <SchedulesList />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.bottomBarBackground,
    paddingHorizontal: normalize(30),
  },
  titleText: {
    fontFamily: "Teko-Regular",
    color: colors.textColor,
    fontSize: normalizeFont(30),
    textAlign: "center",
    marginTop: normalizeFont(50),
  },
});

export default SchedulesScreen;
