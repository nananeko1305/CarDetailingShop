import { View, Text, FlatList } from "react-native";
import { getStyles } from "./SchedulesList.styles";
import { mockSchedules } from "../../../models/common";
import SchedulesItem from "../SchedulesItem/SchedulesItem";

const SchedulesList = () => {
  const styles = getStyles();

  return (
    <View style={styles.rootView}>
      <FlatList
        data={mockSchedules}
        renderItem={({ item }) => <SchedulesItem schedule={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListStyle}
      />
    </View>
  );
};

export default SchedulesList;
