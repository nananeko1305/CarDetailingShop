import { StyleSheet } from "react-native";
import { normalize } from "../../../utils";
import { colors } from "../../../styles/colors";

export const getStyles = () =>
  StyleSheet.create({
    rootView: { position: "relative" },
    backgroundOpacity: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "black",
      opacity: 0.5,
    },
    contentView: {
      flex: 1,
      flexDirection: "row",
      height: normalize(140),
      borderRadius: normalize(8),
      borderWidth: 1,
      borderColor: colors.textColor,
      overflow: "hidden",
    },
    detailsText: {
      fontFamily: "Teko-Regular",
      fontSize: normalize(20),
      color: colors.textColor,
    },
    leftSection: {
      flex: 1,
      justifyContent: "space-between",

      paddingVertical: normalize(10),
      paddingLeft: normalize(20),
    },
    cancelAppointmentButton: {
      backgroundColor: colors.formBackground,
      borderWidth: 1,
      borderColor: colors.inactiveBottomTabLabelColor,
      borderRadius: normalize(8),
      height: normalize(30),
    },
    cancelAppointmentText: {
      fontFamily: "Teko-Regular",
      fontSize: normalize(20),
      color: colors.textColor,
      textAlign: "center",
      textAlignVertical: "center",
      paddingHorizontal: normalize(5),
    },
    viewMoreInfoButton: {},
    viewMoreInfoText: {
      fontFamily: "Teko-Regular",
      fontSize: normalize(16),
      color: colors.textColor,
      textDecorationLine: "underline",
      textTransform: "uppercase",
    },
    rightSection: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: normalize(10),
    },
    serviceType: {
      fontFamily: "Teko-Regular",
      fontSize: normalize(40),
      color: colors.textColor,
    },
  });
