import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { getStyles } from "./SchedulesItem.styles";
import { Schedule } from "../../../models/common";

interface SchedulesItemProps {
  schedule: Schedule;
}

const SchedulesItem = ({ schedule }: SchedulesItemProps) => {
  const styles = getStyles();
  return (
    <ImageBackground style={styles.rootView} source={schedule.car.image}>
      <View style={styles.backgroundOpacity} />
      <View style={styles.contentView}>
        <View style={styles.leftSection}>
          {schedule.serviceAppointment && (
            <Text style={styles.detailsText}>
              Date:
              {schedule.serviceAppointment?.appointmentDate}
            </Text>
          )}
          {schedule.detailingAppointment && (
            <Text style={styles.detailsText}>
              Date: {schedule.detailingAppointment?.appointmentDate}
            </Text>
          )}
          <Text style={styles.detailsText}>
            Car:{"  "} {schedule?.car?.brand}
            {""} {schedule?.car?.model}
          </Text>

          <Text style={styles.detailsText}>
            Fuel Type:{"  "} {schedule?.car?.fuelType}
          </Text>

          <TouchableOpacity style={styles.viewMoreInfoButton}>
            <Text style={styles.viewMoreInfoText}>view more info</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.serviceType}>
            {schedule.serviceAppointment ? "Service" : "Detailing"}
          </Text>
          <TouchableOpacity style={styles.cancelAppointmentButton}>
            <Text style={styles.cancelAppointmentText}>Cancel Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SchedulesItem;
