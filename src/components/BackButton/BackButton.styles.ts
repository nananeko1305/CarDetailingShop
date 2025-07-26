import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { normalize } from "../../utils";

export const getStyles = () =>
  StyleSheet.create({
    rootView: {
      position: "absolute",
      top: normalize(20),
      left: normalize(20),
    },
  });
