import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { TextInput } from "react-native-gesture-handler";

type InputFieldComponentProps = {
  text: string;
  placeholder: string;
};

const InputFieldComponent = ({
  text,
  placeholder,
}: InputFieldComponentProps) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={colors.textColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
  },

  text: {
    color: colors.textColor,
    fontFamily: "Teko-Regular",
    fontSize: 24,
  },

  textInput: {
    backgroundColor: colors.formInputFieldBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.textColor,
    fontFamily: "Teko-Regular",
    fontSize: 22,
    paddingHorizontal: 20,
    color: colors.textColor,
    height: 50,
  },
});

export default InputFieldComponent;
