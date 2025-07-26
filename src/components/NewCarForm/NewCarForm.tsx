import { View, Text, TouchableOpacity } from "react-native";
import { getStyles } from "./NewCarForm.styles";
import { PointerIcon } from "../../assets/icons";
import InputFieldComponent from "../InputField/InputField";
import LinearGradient from "react-native-linear-gradient";
import DatePickerComponent from "../Registration/DatePicker";

const styles = getStyles();

const NewCarForm = () => {
  return (
    <View style={styles.rootView}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Woow! New ride for garage</Text>
      </View>
      <View style={styles.imagePicker}>
        <PointerIcon />
        <Text style={styles.imagePickerText}>Pick An Image</Text>
      </View>
      <View style={styles.inputFields}>
        <View style={styles.inputFieldsRow}>
          <InputFieldComponent text="Brand" placeholder="Please provide" />
          <InputFieldComponent text="Model" placeholder="Please provide" />
        </View>
        <View style={styles.inputFieldsRow}>
          <DatePickerComponent />
          <InputFieldComponent
            text="Engine Displacement"
            placeholder="Please provide"
          />
        </View>
        <View style={styles.inputFieldsRow}>
          <InputFieldComponent text="Fuel Type" placeholder="Please provide" />
          <InputFieldComponent text="Power" placeholder="Please provide" />
        </View>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <LinearGradient
          colors={["#3B2A7E", "#522E61"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1 }}
        >
          <Text style={styles.addButtonText}>Add New Car To Garage</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default NewCarForm;
