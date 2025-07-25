import { Text, TextInput, View } from "react-native";
import { colors } from "../../styles/colors";
import { getStyles } from "./InputField.styles";
import { normalize } from "../../utils";

type InputFieldComponentProps = {
  text: string;
  placeholder: string;
};

const InputFieldComponent = ({
  text,
  placeholder,
}: InputFieldComponentProps) => {
  const styles = getStyles();

  return (
    <View style={styles.rootView}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={colors.textColor}
      />
    </View>
  );
};

export default InputFieldComponent;
