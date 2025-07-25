import { StyleSheet } from "react-native";
import { normalize, normalizeFont } from "../../../utils";
import { colors } from "../../../styles/colors";

export const getStyles = () =>
  StyleSheet.create({
    rootView: {
      height: normalize(600),
      marginTop: normalize(10),
      opacity: 0.9,
      borderRadius: normalize(20),
      padding: normalize(20),
    },
    scheduleText: {
      fontFamily: "Teko-Regular",
      fontSize: normalizeFont(30),
      color: colors.textColor,
    },
    sectionView: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
    },
    topSectionView: {
      flex: 1.5,
      flexDirection: "row",
      gap: normalize(40),
    },
    leftSectionView: {
      flex: 1,
    },
    categoryText: {
      color: colors.textColor,
      fontFamily: "Teko-Regular",
      fontSize: normalizeFont(20),
    },
    line: {
      height: 1,
      backgroundColor: colors.textColor,
      marginVertical: normalize(10),
    },
    rightSectionView: {
      flex: 1,
    },
    bottomSectionView: {
      flex: 1.5,
    },
    oneOption: {
      flexDirection: "row",
      alignItems: "center",
    },
    optionText: {
      color: colors.textColor,
      fontFamily: "Teko-Regular",
      fontSize: normalizeFont(20),
    },
    bottomOptionsView: {
      gap: normalize(20),
    },
    pickADateButton: {
      flex: 1,
      borderWidth: 1,
      borderColor: colors.textColor,
      borderRadius: normalize(8),
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: normalize(10),
    },
    pickADateText: {
      color: colors.textColor,
      fontFamily: "Teko-Regular",
      fontSize: normalizeFont(20),
    },
    selectedDateText: {
      color: colors.textColor,
      fontFamily: "Teko-Regular",
      fontSize: normalizeFont(20),
    },
    buttonSectionView: {
      flex: 1,
      gap: normalize(10),
    },
    confirmButton: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors.textColor,
      borderRadius: normalize(8),
      gap: normalize(5),
      flex: 2,
    },
    cancelButton: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors.textColor,
      borderRadius: normalize(8),
      gap: normalize(5),
      flex: 1,
    },
    buttonText: {
      color: colors.textColor,
      fontFamily: "Teko-Regular",
      fontSize: normalizeFont(20),
    },
    checkBox: {
      marginRight: normalize(0),
      marginLeft: normalize(0),
      alignSelf: "center",
    },
  });
