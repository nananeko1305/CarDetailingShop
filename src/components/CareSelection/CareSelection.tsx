import { View, Text, TouchableOpacity } from "react-native";
import { getStyles } from "./CareSelection.styles";
import { icons } from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../models/NavigationType";

enum CareType {
  Service = "FrenchKeyIcon",
  Detailing = "CarwashIcon",
}

const CareSelection = () => {
  const styles = getStyles();
  return (
    <View style={styles.rootView}>
      <Text style={styles.titleText}>
        What kind of care your car needs next?
      </Text>
      <View style={styles.buttonsView}>
        <CareButton title="Service" Icon={CareType.Service} />
        <CareButton title="Detailing" Icon={CareType.Detailing} />
      </View>
    </View>
  );
};

interface CareButtonProps {
  title: string;
  Icon: keyof typeof icons;
}
const CareButton = ({ title, Icon }: CareButtonProps) => {
  const styles = getStyles();
  const SvgIcon = icons[Icon];
  const { navigate } = useNavigation<NavigationType>();

  const navigationScreen =
    Icon === CareType.Service ? "ServiceScreen" : "DetailingScreen";

  return (
    <TouchableOpacity
      style={styles.buttonView}
      onPress={() => navigate(navigationScreen)}
    >
      <Text style={styles.buttonText}>{title}</Text>
      <SvgIcon />
    </TouchableOpacity>
  );
};

export default CareSelection;
