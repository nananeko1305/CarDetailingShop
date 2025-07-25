import { Button, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { Pressable, TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { normalize, normalizeFont } from "../../utils";

const DatePickerComponent = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState(false);
  const [isDatePicked, setIsDatePicked] = useState(false);
  const [formatedDate, setFormatedDate] = useState<string>("");

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setIsDatePicked(true);
    let dateSTR = `${currentDate?.getDate()}/${
      currentDate?.getMonth() + 1
    }/${currentDate?.getFullYear()}`;
    setFormatedDate(dateSTR);
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Date Of Birth </Text>
      <Pressable onPress={() => setShow(true)} style={styles.datePicker}>
        <Text style={styles.text}>
          {isDatePicked ? formatedDate : "PICK A DATE"}
        </Text>
      </Pressable>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    display: "flex",
    width: "45%",
  },

  datePicker: {
    backgroundColor: colors.formInputFieldBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.textColor,
    paddingHorizontal: 20,
    height: normalize(50),
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: colors.textColor,
    fontFamily: "Teko-Regular",
    fontSize: normalizeFont(20),
  },
});

export default DatePickerComponent;
