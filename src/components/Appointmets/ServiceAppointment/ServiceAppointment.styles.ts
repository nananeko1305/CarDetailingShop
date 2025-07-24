import { StyleSheet } from "react-native";
import { normalize, normalizeFont } from "../../../utils";
import { colors } from "../../../styles/colors";

export const getStyles = () =>
  StyleSheet.create({
    rootView: {
      height: normalize(550),
      marginTop: normalize(40),
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
    topSectionView: {},
  });
