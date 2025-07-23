import { StyleSheet } from "react-native";
import { normalize, normalizeFont } from "../../utils";
import { colors } from "../../styles/colors";

export const getStyles = () =>
  StyleSheet.create({
    rootView: {
      height: normalize(150),
      backgroundColor: colors.bg_0E0E28,
      opacity: 0.9,
    },
    titleText: {
      flex: 1,
      fontSize: normalizeFont(30),
      color: colors.textColor,
      fontFamily: "Teko-Regular",
      textAlign: "center",
      textAlignVertical: "bottom",
    },
    buttonsView: {
      flex: 1.5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    buttonView: {
      flexDirection: "row",
      height: normalize(50),
      width: normalize(150),
      backgroundColor: colors.formInputFieldBackground,
      borderRadius: normalize(10),
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors.textColor,
      columnGap: normalize(5),
    },
    buttonText: {
      color: colors.textColor,
      fontSize: normalizeFont(26),
      fontFamily: "Teko-Regular",
    },
  });
