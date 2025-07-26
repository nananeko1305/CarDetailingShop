import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";
import BackButton from "../components/BackButton/BackButton";
import NewCarForm from "../components/NewCarForm/NewCarForm";

const CarsScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <BackButton />
      <NewCarForm />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bottomBarBackground,
  },
});

export default CarsScreen;
