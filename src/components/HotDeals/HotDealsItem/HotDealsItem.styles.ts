import { StyleSheet } from "react-native";
import { normalize, normalizeFont } from "../../../utils";
import { colors } from "../../../styles/colors";

export const getStyles = () =>
  StyleSheet.create({
    dealView: {
      flex: 1,
      borderRadius: normalize(10),
      overflow: "hidden",
    },
    hotDealView: {
      flex: 1,
      borderRadius: normalize(10),
      overflow: "hidden",
    },
    titleView: {
      flex: 1,
      backgroundColor: colors.B1B1B1,
      alignItems: "center",
      justifyContent: "center",
    },
    hotDealTitleView: {
      flex: 1,
      backgroundColor: colors.popularDeal,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: colors.white,
      borderTopEndRadius: normalize(10),
      borderTopStartRadius: normalize(10),
    },
    titleText: {
      fontFamily: "Teko-Regular",
      fontSize: normalizeFont(20),
    },
    optionsView: {
      flex: 3,
      backgroundColor: colors.carDetails,
      paddingHorizontal: normalize(10),
      height: normalize(100),
      zIndex: 1,
      justifyContent: "center",
    },
    optionText: {
      fontFamily: "Teko-Regular",
      fontSize: normalizeFont(16),
    },
    regularView: {
      flex: 1,
      backgroundColor: colors.carDetails,
    },
    popularView: {
      backgroundColor: colors.popularDeal,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: colors.white,
      borderBottomEndRadius: normalize(10),
      borderBottomStartRadius: normalize(10),
    },
    popularText: {
      color: colors.white,
      fontFamily: "Teko-Regular",
      fontSize: normalizeFont(16),
    },
  });
