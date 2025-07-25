import { Text, TouchableOpacity, View } from "react-native";
import { getStyles } from "./ServiceAppointment.styles";
import LinearGradient from "react-native-linear-gradient";
import { useState } from "react";
import {
  AdvancedService,
  BasicService,
  BonusService,
  initialServiceAppointment,
  ServiceAppointment,
} from "../../../models/common";
import CheckBox from "@react-native-community/checkbox";
import { normalize } from "../../../utils";
import { CheckIcon, CrossIcon, DateIcon } from "../../../assets/icons";
import { colors } from "../../../styles/colors";
import DateTimePicker from "@react-native-community/datetimepicker";

const ServiceAppointmentComponent = () => {
  const [appointment, setAppointment] = useState<ServiceAppointment>(
    initialServiceAppointment
  );

  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState(false);

  const styles = getStyles();

  const handleOnCheckBoxPress = (option: string) => {
    setAppointment((prev) => {
      const updatedBasicService = { ...prev.basicService };
      const updatedAdvancedService = { ...prev.advancedService };
      const updatedBonusService = { ...prev.bonusService };

      if (Object.keys(updatedBasicService).includes(option)) {
        updatedBasicService[option as keyof BasicService] =
          !updatedBasicService[option as keyof BasicService];
      } else if (Object.keys(updatedAdvancedService).includes(option)) {
        updatedAdvancedService[option as keyof AdvancedService] =
          !updatedAdvancedService[option as keyof AdvancedService];
      } else if (Object.keys(updatedBonusService).includes(option)) {
        updatedBonusService[option as keyof BonusService] =
          !updatedBonusService[option as keyof BonusService];
      }

      return {
        ...prev,
        basicService: updatedBasicService,
        advancedService: updatedAdvancedService,
        bonusService: updatedBonusService,
      };
    });
  };

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    if (currentDate < new Date()) {
      alert("Please select a valid date.");
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
              <Text style={styles.categoryText}>Basic Service</Text>
              <View style={styles.line} />
            </View>
            <View>
              <View style={styles.oneOption}>
                <CheckBox
                  value={appointment?.basicService.oilChange}
                  style={styles.checkBox}
                  tintColors={{
                    true: colors.checkBoxColor,
                    false: colors.checkBoxColor,
                  }}
                  onValueChange={() => handleOnCheckBoxPress("oilChange")}
                />
                <Text style={styles.optionText}>Oil Change</Text>
              </View>
              <View style={styles.oneOption}>
                <CheckBox
                  value={appointment?.basicService.oilFilterChange}
                  style={styles.checkBox}
                  tintColors={{
                    true: colors.checkBoxColor,
                    false: colors.checkBoxColor,
                  }}
                  onValueChange={() => handleOnCheckBoxPress("oilFilterChange")}
                />
                <Text style={styles.optionText}>Oil Filter Change</Text>
              </View>
              <View style={styles.oneOption}>
                <CheckBox
                  value={appointment?.basicService.airFilterChange}
                  style={styles.checkBox}
                  tintColors={{
                    true: colors.checkBoxColor,
                    false: colors.checkBoxColor,
                  }}
                  onValueChange={() => handleOnCheckBoxPress("airFilterChange")}
                />
                <Text style={styles.optionText}>Air Filter Change</Text>
              </View>
              <View style={styles.oneOption}>
                <CheckBox
                  value={appointment?.basicService.cabinFilterChange}
                  style={styles.checkBox}
                  tintColors={{
                    true: colors.checkBoxColor,
                    false: colors.checkBoxColor,
                  }}
                  onValueChange={() =>
                    handleOnCheckBoxPress("cabinFilterChange")
                  }
                />
                <Text style={styles.optionText}>Cabin Filter Change</Text>
              </View>
            </View>
          </View>
          <View style={styles.rightSectionView}>
            <View>
              <Text style={styles.categoryText}>Advanced Service</Text>
              <View style={styles.line} />
            </View>
            <View>
              <View style={styles.oneOption}>
                <CheckBox
                  value={appointment?.advancedService.sparkPlugChange}
                  style={styles.checkBox}
                  tintColors={{
                    true: colors.checkBoxColor,
                    false: colors.checkBoxColor,
                  }}
                  onValueChange={() => handleOnCheckBoxPress("sparkPlugChange")}
                />
                <Text style={styles.optionText}>Spark Plugs Change</Text>
              </View>
              <View style={styles.oneOption}>
                <CheckBox
                  value={appointment?.advancedService.coolantChange}
                  style={styles.checkBox}
                  tintColors={{
                    true: colors.checkBoxColor,
                    false: colors.checkBoxColor,
                  }}
                  onValueChange={() => handleOnCheckBoxPress("coolantChange")}
                />
                <Text style={styles.optionText}>Coolant Change</Text>
              </View>
              <View style={styles.oneOption}>
                <CheckBox
                  value={appointment?.advancedService.brakesChange}
                  style={styles.checkBox}
                  tintColors={{
                    true: colors.checkBoxColor,
                    false: colors.checkBoxColor,
                  }}
                  onValueChange={() => handleOnCheckBoxPress("brakesChange")}
                />
                <Text style={styles.optionText}>Brakes Change</Text>
              </View>
              <View style={styles.oneOption}>
                <CheckBox
                  value={appointment?.advancedService.brakeFluidChange}
                  style={styles.checkBox}
                  tintColors={{
                    true: colors.checkBoxColor,
                    false: colors.checkBoxColor,
                  }}
                  onValueChange={() =>
                    handleOnCheckBoxPress("brakeFluidChange")
                  }
                />
                <Text style={styles.optionText}>Change Brake Fluid</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomSectionView}>
          <View>
            <Text style={styles.categoryText}>Bonus Service</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.bottomOptionsView}>
            <View style={{ flexDirection: "row", gap: normalize(40) }}>
              <View style={{ flex: 1 }}>
                <View style={styles.oneOption}>
                  <CheckBox
                    value={appointment?.bonusService.checkTirePressure}
                    style={styles.checkBox}
                    tintColors={{
                      true: colors.checkBoxColor,
                      false: colors.checkBoxColor,
                    }}
                    onValueChange={() =>
                      handleOnCheckBoxPress("checkTirePressure")
                    }
                  />
                  <Text style={styles.optionText}>Check Tire Pressure</Text>
                </View>
                <View style={styles.oneOption}>
                  <CheckBox
                    value={appointment?.bonusService.checkCoolantLevel}
                    style={styles.checkBox}
                    tintColors={{
                      true: colors.checkBoxColor,
                      false: colors.checkBoxColor,
                    }}
                    onValueChange={() =>
                      handleOnCheckBoxPress("checkCoolantLevel")
                    }
                  />
                  <Text style={styles.optionText}>Check Coolant Level</Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.oneOption}>
                  <CheckBox
                    value={appointment?.bonusService.checkOilLevel}
                    style={styles.checkBox}
                    tintColors={{
                      true: colors.checkBoxColor,
                      false: colors.checkBoxColor,
                    }}
                    onValueChange={() => handleOnCheckBoxPress("checkOilLevel")}
                  />
                  <Text style={styles.optionText}>Check Oil Level</Text>
                </View>
                <View style={styles.oneOption}>
                  <CheckBox
                    value={appointment?.bonusService.checkWasherFluidLevel}
                    style={styles.checkBox}
                    tintColors={{
                      true: colors.checkBoxColor,
                      false: colors.checkBoxColor,
                    }}
                    onValueChange={() =>
                      handleOnCheckBoxPress("checkWasherFluidLevel")
                    }
                  />
                  <Text style={styles.optionText}>Check Washer Fluid</Text>
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

export default ServiceAppointmentComponent;
