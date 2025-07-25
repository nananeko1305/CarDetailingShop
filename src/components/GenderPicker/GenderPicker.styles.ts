import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { normalize, normalizeFont } from "../../utils";

export const getStyles = () =>
  StyleSheet.create({
    rootView: {
      width: "45%",
      height: normalize(50),
    },
    text: {
      color: colors.textColor,
      fontFamily: "Teko-Regular",
      fontSize: normalizeFont(20),
    },
    genderSelector: {
      height: normalize(50),
      borderWidth: 1,
      borderColor: colors.textColor,
      borderRadius: normalize(8),
      overflow: "hidden",
    },
    genderSelectorText: {
      fontSize: normalizeFont(22),
      fontFamily: "Teko-Regular",
      color: colors.textColor,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: "center",
      alignItems: "center",
    },
    modalWrapper: {
      flex: 1,
      opacity: 0.95,
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      width: normalize(250),
      borderWidth: 1,
      borderColor: colors.textColor,
      height: normalize(200),
      padding: normalize(10),
      borderRadius: normalize(8),
    },
    closeButton: {
      alignItems: "flex-end",
    },
    modalOptions: {
      flex: 1,
      justifyContent: "center",
      gap: normalize(10),
    },
    modalOption: {
      height: normalize(40),
      fontFamily: "Teko-Regular",
      fontSize: normalizeFont(24),
      borderWidth: 1,
      borderColor: colors.textColor,
      borderRadius: normalize(8),
      color: colors.textColor,
      textAlign: "center",
      textAlignVertical: "center",
    },
  });
