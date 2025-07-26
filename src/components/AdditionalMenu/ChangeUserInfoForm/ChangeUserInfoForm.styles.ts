import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";
import { normalize, normalizeFont } from "../../../utils";

export const getStyles = () =>
  StyleSheet.create({
    rootContainer: {
      flex: 1,
      paddingHorizontal: 30,
      rowGap: 20,
      paddingTop: 80,
    },
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 50,
      borderWidth: 1,
      borderColor: colors.textColor,
      borderRadius: 8,
    },
    buttonText: {
      fontFamily: "Teko-Regular",
      fontSize: normalizeFont(24),
      color: colors.textColor,
    },
    userInfoSection: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
      paddingBottom: 20,
    },
    userImage: {
      height: 80,
      width: 80,
      backgroundColor: colors.textColor,
      borderRadius: 40,
    },
    text: {
      fontSize: 24,
      color: colors.textColor,
      fontFamily: "Teko-Regular",
    },
    passwordSection: {
      paddingTop: 20,
      rowGap: 20,
    },
    buttonWrapper: {
      marginTop: 30,
    },
    confirmButtonWrapper: {
      paddingTop: 30,
      paddingBottom: 100,
    },
    inputFieldsSection: {
      rowGap: 20,
    },
    confirmButtonText: {
      fontSize: normalizeFont(24),
      color: colors.textColor,
      fontFamily: "Teko-Regular",
    },
    pickersSection: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: normalize(20),
    },
  });
