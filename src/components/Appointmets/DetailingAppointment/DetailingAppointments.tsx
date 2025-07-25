import { Alert, Text, TouchableOpacity, View } from "react-native";
import { getStyles } from "./DetailingAppointments.styles";
import LinearGradient from "react-native-linear-gradient";
import { useState } from "react";
import {
  BasicWash,
  DetailingAppointment,
  ExteriorDetailing,
  InteriorDetailing,
  interiorDetailingAppointment,
} from "../../../models/common";
import CheckBox from "@react-native-community/checkbox";
import { normalize } from "../../../utils";
import { CheckIcon, CrossIcon, DateIcon } from "../../../assets/icons";
import { colors } from "../../../styles/colors";
import DateTimePicker from "@react-native-community/datetimepicker";

const DetailingAppointmentComponent = () => {
  const [appointment, setAppointment] = useState<DetailingAppointment>(
    interiorDetailingAppointment
  );

  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState(false);

  const styles = getStyles();

  const handleOnCheckBoxPress = (option: string) => {
    setAppointment((prev) => {
      const updatedBasicWash = { ...prev.basicWash };
      const updatedExteriorDetailing = { ...prev.exteriorDetailing };
      const updatedInteriorDetailing = { ...prev.interiorDetailing };

      if (Object.keys(updatedBasicWash).includes(option)) {
        updatedBasicWash[option as keyof BasicWash] =
          !updatedBasicWash[option as keyof BasicWash];
      } else if (Object.keys(updatedExteriorDetailing).includes(option)) {
        updatedExteriorDetailing[option as keyof ExteriorDetailing] =
          !updatedExteriorDetailing[option as keyof ExteriorDetailing];
      } else if (Object.keys(updatedInteriorDetailing).includes(option)) {
        updatedInteriorDetailing[option as keyof InteriorDetailing] =
          !updatedInteriorDetailing[option as keyof InteriorDetailing];
      }

      return {
        ...prev,
        basicWash: updatedBasicWash,
        exteriorDetailing: updatedExteriorDetailing,
        interiorDetailing: updatedInteriorDetailing,
      };
    });
  };

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    if (currentDate < new Date()) {
      Alert.alert("Invalid Date", "Please select a valid date.");
      setShow(false);
      return;
    }
    setShow(false);
    setDate(currentDate);
    let dateSTR = `${currentDate?.getDate()}/${
      currentDate?.getMonth() + 1
    }/${currentDate?.getFullYear()}`;
    appointment.appointmentDate = dateSTR;
    setAppointment({ ...appointment });
  };

  return (
    <LinearGradient
      colors={["#3B2A7E", "#522E61"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.rootView}
    >
      <Text style={styles.scheduleText}>Schedule An Appointment</Text>

      <View style={styles.sectionView}>
        <View style={styles.topSectionView}>
          <View style={styles.leftSectionView}>
            <View>
              <Text style={styles.categoryText}>Basic Wash</Text>
              <View style={styles.line} />
            </View>
            <View>
              <View style={styles.oneOption}>
                <CheckBox
                  value={appointment?.basicWash.foamSpray}
                  style={styles.checkBox}
                  tintColors={{
                    true: colors.checkBoxColor,
                    false: colors.checkBoxColor,
                  }}
                  onValueChange={() => handleOnCheckBoxPress("foamSpray")}
                />
                <Text style={styles.optionText}>Foam Spray</Text>
              </View>
              <View style={styles.oneOption}>
                <CheckBox
                  value={appointment?.basicWash.microPowderWash}
                  style={styles.checkBox}
                  tintColors={{
                    true: colors.checkBoxColor,
                    false: colors.checkBoxColor,
                  }}
                  onValueChange={() => handleOnCheckBoxPress("microPowderWash")}
                />
                <Text style={styles.optionText}>Micro powder Wash</Text>
              </View>
              <View style={styles.oneOption}>
                <CheckBox
                  value={appointment?.basicWash.waxProtection}
                  style={styles.checkBox}
                  tintColors={{
                    true: colors.checkBoxColor,
                    false: colors.checkBoxColor,
                  }}
                  onValueChange={() => handleOnCheckBoxPress("waxProtection")}
                />
                <Text style={styles.optionText}>Wax Protection</Text>
              </View>
              <View style={styles.oneOption}>
                <CheckBox
                  value={appointment?.basicWash.demineralizedRinsing}
                  style={styles.checkBox}
                  tintColors={{
                    true: colors.checkBoxColor,
                    false: colors.checkBoxColor,
                  }}
                  onValueChange={() =>
                    handleOnCheckBoxPress("demineralizedRinsing")
                  }
                />
                <Text style={styles.optionText}>Demineralized Rinsing</Text>
              </View>
            </View>
          </View>
          <View style={styles.rightSectionView}>
            <View>
              <Text style={styles.categoryText}>Exterior Detailing</Text>
              <View style={styles.line} />
            </View>
            <View>
              <View style={styles.oneOption}>
                <CheckBox
                  value={appointment?.exteriorDetailing.decontamination}
                  style={styles.checkBox}
                  tintColors={{
                    true: colors.checkBoxColor,
                    false: colors.checkBoxColor,
                  }}
                  onValueChange={() => handleOnCheckBoxPress("decontamination")}
                />
                <Text style={styles.optionText}>Decontamination</Text>
              </View>
              <View style={styles.oneOption}>
                <CheckBox
                  value={appointment?.exteriorDetailing.carPolishing}
                  style={styles.checkBox}
                  tintColors={{
                    true: colors.checkBoxColor,
                    false: colors.checkBoxColor,
                  }}
                  onValueChange={() => handleOnCheckBoxPress("carPolishing")}
                />
                <Text style={styles.optionText}>Car Polishing</Text>
              </View>
              <View style={styles.oneOption}>
                <CheckBox
                  value={appointment?.exteriorDetailing.headlightPolishing}
                  style={styles.checkBox}
                  tintColors={{
                    true: colors.checkBoxColor,
                    false: colors.checkBoxColor,
                  }}
                  onValueChange={() =>
                    handleOnCheckBoxPress("headlightPolishing")
                  }
                />
                <Text style={styles.optionText}>Headlight Polishing</Text>
              </View>
              <View style={styles.oneOption}>
                <CheckBox
                  value={appointment?.exteriorDetailing.ceramicProtection}
                  style={styles.checkBox}
                  tintColors={{
                    true: colors.checkBoxColor,
                    false: colors.checkBoxColor,
                  }}
                  onValueChange={() =>
                    handleOnCheckBoxPress("ceramicProtection")
                  }
                />
                <Text style={styles.optionText}>Ceramic Protection</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomSectionView}>
          <View>
            <Text style={styles.categoryText}>Interior Detailing</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.bottomOptionsView}>
            <View style={{ flexDirection: "row", gap: normalize(40) }}>
              <View style={{ flex: 1 }}>
                <View style={styles.oneOption}>
                  <CheckBox
                    value={appointment?.interiorDetailing.deepCleaning}
                    style={styles.checkBox}
                    tintColors={{
                      true: colors.checkBoxColor,
                      false: colors.checkBoxColor,
                    }}
                    onValueChange={() => handleOnCheckBoxPress("deepCleaning")}
                  />
                  <Text style={styles.optionText}>Deep Cleaning</Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.oneOption}>
                  <CheckBox
                    value={appointment?.interiorDetailing.wacuumCleaning}
                    style={styles.checkBox}
                    tintColors={{
                      true: colors.checkBoxColor,
                      false: colors.checkBoxColor,
                    }}
                    onValueChange={() =>
                      handleOnCheckBoxPress("wacuumCleaning")
                    }
                  />
                  <Text style={styles.optionText}>Vacuum Cleaning</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: normalize(40),

                marginBottom: normalize(20),
              }}
            >
              <View style={{ flex: 1 }}>
                <View style={styles.oneOption}>
                  <CheckBox
                    value={appointment?.exteriorDetailing.brushWashing}
                    style={styles.checkBox}
                    tintColors={{
                      true: colors.checkBoxColor,
                      false: colors.checkBoxColor,
                    }}
                    onValueChange={() => handleOnCheckBoxPress("brushWashing")}
                  />
                  <Text style={styles.optionText}>Brush Washing</Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.oneOption}>
                  <CheckBox
                    value={appointment?.exteriorDetailing.seatProtection}
                    style={styles.checkBox}
                    tintColors={{
                      true: colors.checkBoxColor,
                      false: colors.checkBoxColor,
                    }}
                    onValueChange={() =>
                      handleOnCheckBoxPress("seatProtection")
                    }
                  />
                  <Text style={styles.optionText}>Seat Protection</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: normalize(40),
              }}
            >
              <TouchableOpacity
                style={styles.pickADateButton}
                onPress={() => setShow(true)}
              >
                <DateIcon />
                <Text style={styles.pickADateText}>PICK A DATE</Text>
              </TouchableOpacity>
              <View style={{ flex: 1 }}>
                <Text style={styles.selectedDateText}>Selected Date</Text>
                <Text style={styles.selectedDateText}>
                  {appointment?.appointmentDate}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttonSectionView}>
          <TouchableOpacity style={styles.confirmButton}>
            <CheckIcon />
            <Text style={styles.buttonText}>SCHEDULE AN APPOINTMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <CrossIcon />
            <Text style={styles.buttonText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </LinearGradient>
  );
};

export default DetailingAppointmentComponent;
