import { StyleSheet } from "react-native";
import { normalize } from "../../../utils";

export const getStyles = () =>
  StyleSheet.create({
    rootView: {
      marginTop: normalize(40),
      marginBottom: normalize(95),
    },
    flatListStyle: {
      gap: normalize(20),
    },
  });
