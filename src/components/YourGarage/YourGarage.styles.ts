import { StyleSheet } from "react-native";
import { normalize } from "../../utils";
import { colors } from "../../styles/colors";

export const getStyles = () =>
  StyleSheet.create({
    rootContainer: {
      marginTop: normalize(40),
      height: normalize(300),
      width: "100%",
      borderTopEndRadius: normalize(20),
      borderTopStartRadius: normalize(20),
      overflow: "hidden",
      borderWidth: 2,
      borderColor: colors.textColor,
    },
    titleView: {
      flexDirection: "row",
      height: normalize(50),
      // backgroundColor: colors.formInputFieldBackground,
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: normalize(20),
    },
    yourGarageText: {
      fontSize: normalize(30),
      fontFamily: "Teko-Regular",
      color: colors.textColor,
    },
    iconsView: {
      flexDirection: "row",
      gap: normalize(10),
    },
  });
