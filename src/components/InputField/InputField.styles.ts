import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { normalize, normalizeFont } from "../../utils";

export const getStyles = () =>
  StyleSheet.create({
    rootView: {
      flexDirection: "column",
    },
    text: {
      color: colors.textColor,
      fontFamily: "Teko-Regular",
      fontSize: normalize(20),
    },
    textInput: {
      backgroundColor: colors.formInputFieldBackground,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.textColor,
      fontFamily: "Teko-Regular",
      color: colors.textColor,
      padding: normalize(10),
      overflow: "hidden",
      height: normalize(50),
      fontSize: normalizeFont(18),
    },
  });
