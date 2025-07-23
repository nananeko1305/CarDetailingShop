import { StyleSheet } from "react-native";
import { normalize, normalizeFont } from "../../../utils";
import { colors } from "../../../styles/colors";

export const getStyles = () =>
  StyleSheet.create({
    rootView: {
      position: "relative",
      flex: 1,
    },
    floatingInformationWrapper: {
      position: "absolute",
      flex: 1,
      height: "100%",
      width: normalize(150),
    },
    floatingInformationView: {
      position: "absolute",
      flex: 1,
      height: "100%",
      width: normalize(150),
      backgroundColor: colors.carDetails,
      opacity: 0.9,
      justifyContent: "center",
      paddingLeft: normalize(20),
      gap: normalize(10),
    },
    infoText: {
      fontSize: normalizeFont(20),
      fontFamily: "Teko-Regular",
    },
  });
