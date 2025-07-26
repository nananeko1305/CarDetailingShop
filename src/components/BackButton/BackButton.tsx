import { TouchableOpacity, View } from "react-native";
import { getStyles } from "./BackButton.styles";
import { ArrowLeftIcon } from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../models/NavigationType";

const styles = getStyles();

const BackButton = () => {
  const { goBack } = useNavigation<NavigationType>();

  const onPressBack = () => {
    goBack();
  };

  return (
    <TouchableOpacity style={styles.rootView} onPress={onPressBack}>
      <ArrowLeftIcon />
    </TouchableOpacity>
  );
};

export default BackButton;
