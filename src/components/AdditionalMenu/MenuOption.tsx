import { Pressable, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { MenuOption } from "../../models/MenuOption";
import { colors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../models/NavigationType";

type MenuOptionProps = {
  menuOption: MenuOption;
};

const MenuOptionComponent = ({ menuOption }: MenuOptionProps) => {
  const { navigate } = useNavigation<NavigationType>();

  const hadnleOnNavigate = () => {
    navigate(menuOption.uri);
  };

  return (
    <Pressable onPress={hadnleOnNavigate} style={styles.rootContainer}>
      <View style={styles.leftSection}>
        <FastImage
          source={menuOption.icon}
          style={styles.icon}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.text}>{menuOption.text}</Text>
      </View>
      <View style={styles.rightSection}>
        <FastImage
          source={require("../../assets/icons/arrow_right_icon.png")}
          style={styles.arrowIcon}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    flexDirection: "row",
    height: 60,
    width: "100%",
    borderWidth: 1,
    borderColor: colors.purpleText,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  leftSection: {
    display: "flex",
    flex: 0.1,
    alignItems: "center",
  },
  middleSection: {
    display: "flex",
    flex: 0.8,
    paddingLeft: 10,
  },
  rightSection: {
    display: "flex",
    flex: 0.1,
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  arrowIcon: {
    width: 24,
    height: 24,
  },
  text: {
    color: colors.textColor,
    fontFamily: "Teko-Regular",
    fontSize: 24,
  },
});

export default MenuOptionComponent;
