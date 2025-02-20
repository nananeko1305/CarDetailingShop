import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";
import MenuOptionComponent from "../components/AdditionalMenu/MenuOption";
import menuOptions from "../models/MenuOption";
import UserInfoComponent from "../components/AdditionalMenu/UserInfo";

const AdditionalMenuScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <UserInfoComponent />
      <View style={styles.options}>
        {menuOptions.map((menuOption) => {
          return (
            <MenuOptionComponent
              menuOption={menuOption}
              key={menuOption.text}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.bottomBarBackground,
    paddingHorizontal: 40,
  },
  options: {
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
  },
});

export default AdditionalMenuScreen;
