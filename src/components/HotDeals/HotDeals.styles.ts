import { StyleSheet } from "react-native";
import { normalize } from "../../utils";
import { colors } from "../../styles/colors";

export const getStyles = () =>
  StyleSheet.create({
    rootView: {
      opacity: 0.8,
      height: normalize(200),
      padding: normalize(20),
    },
    titleView: {
      flexDirection: "row",
      alignItems: "center",
      columnGap: normalize(5),
    },
    hotDealsText: {
      fontSize: normalize(28),
      fontFamily: "Teko-Regular",
      color: colors.textColor,
    },
    hotDealGrid: {
      flex: 1,
      flexDirection: "row",
      gap: normalize(15),
      marginTop: normalize(10),
    },
  });
