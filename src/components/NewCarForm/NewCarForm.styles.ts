import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { normalize, normalizeFont } from "../../utils";

export const getStyles = () =>
  StyleSheet.create({
    rootView: {
      flex: 1,
      paddingHorizontal: normalize(20),
      gap: normalize(20),
    },
    titleView: {
      marginTop: normalize(60),
      justifyContent: "center",
      alignItems: "center",
    },
    titleText: {
      fontSize: normalizeFont(30),
      fontFamily: "Teko-Regular",
      color: colors.textColor,
    },
    imagePicker: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.textColor,
      height: normalize(200),
      borderRadius: normalize(20),
    },
    imagePickerText: {
      color: colors.pickImageTextColor,
      fontFamily: "Teko-Regular",
      fontSize: normalizeFont(24),
    },
    inputFields: {
      marginTop: normalize(20),
      gap: normalize(10),
    },
    inputFieldsRow: {
      flexDirection: "row",
      gap: normalize(20),
    },
    addButton: {
      height: normalize(50),
      borderRadius: normalize(8),
      overflow: "hidden",
      borderWidth: 1,
      borderColor: colors.textColor,
    },
    addButtonText: {
      flex: 1,
      color: colors.white,
      fontFamily: "Teko-Regular",
      fontSize: normalizeFont(24),
      textAlign: "center",
      textAlignVertical: "center",
    },
  });
